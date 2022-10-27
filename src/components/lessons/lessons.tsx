import React from 'react'
import Lesson, { LessonProps } from './lesson/lesson'
import cls from './lessons.module.scss'
export interface LessonsProps {
  lessons: {
    avatar: string
    title: string
    lesson: LessonProps['lesson']
  }[]
}

const Lessons: React.FC<LessonsProps> = ({ lessons }) => {
  const [state, setState] = React.useState()

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.title}>Flutter Cross-platform</h2>
      <div className={cls.lessons}>
        {lessons.map((item, idx) => (
          <div key={idx}>
            <div className={cls.lesson}>
              <span>{idx + 1}</span>
              <div>
                <h3 className={cls['lesson-title']}>{item.title}</h3>
              </div>
              <input type="checkbox" name="" id="" />
            </div>
            <Lesson lesson={item.lesson} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lessons
