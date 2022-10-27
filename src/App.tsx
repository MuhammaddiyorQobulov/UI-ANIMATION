import React from 'react'
import Lessons, { LessonsProps } from './components/lessons/lessons'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const items: LessonsProps['lessons'] = [
    {
      avatar: 'wef',
      title: 'Create #D site with Spline and ReactCr...',
      lesson: [
        {
          avatar: 'r',
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: true,
        },
      ],
    },
  ]

  return (
    <div>
      <button>Darslar</button>
      <div className="menus">
        <Lessons lessons={items} />
      </div>
    </div>
  )
}

export default App
