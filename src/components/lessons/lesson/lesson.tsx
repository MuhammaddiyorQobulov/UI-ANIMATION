import React, { useState } from 'react'
import cls from './lesson.module.scss'

export interface LessonProps {
  lesson: {
    avatar: string
    title: string
    timeToLearn?: string
    isChecked?: boolean
  }[]
}

const Lesson: React.FC<LessonProps> = ({ lesson }) => {
  const [state, setState] = useState(null)

  return (
    <div className={cls.part}>
      {lesson.map(({ avatar, title, timeToLearn, isChecked }, idx) => (
        <div key={idx} className={cls.lesson}>
          <span>{avatar}</span>
          <div className={cls.title}>
            <h3>{title}</h3>
            <p>{timeToLearn}</p>
          </div>
          <input type="checkbox" name="" defaultChecked={isChecked} id="" />
        </div>
      ))}
    </div>
  )
}

export default Lesson
