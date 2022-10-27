import React, { CSSProperties, useEffect, useState } from 'react'
import Lessons, { LessonsProps } from './components/lessons/lessons'
import './assets/styles/main.scss'

interface AppProps {}

let top = '-30%'
let left = '-50%'

const App: React.FC<AppProps> = () => {
  const [state, setState] = useState(true)

  const items: LessonsProps['lessons'] = [
    {
      avatar: 'wef',
      title: 'Create #D site with Spline and ReactCr...',
      lesson: [
        {
          avatar: <i className="fa-solid fa-video"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: true,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
      ],
    },
    {
      avatar: 'wef',
      title: 'Create #D site with Spline and ReactCr...',
      lesson: [
        {
          avatar: <i className="fa-solid fa-video"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: true,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
        {
          avatar: <i className="fa-regular fa-list"></i>,
          title: 'Why React Hooks?',
          timeToLearn: "10:10 video, 8 minut o'qish",
          isChecked: false,
        },
      ],
    },
  ]

  useEffect(() => {
    top = state ? '12%' : '-30%'
    left = state ? '0%' : '-50%'
  })

  return (
    <div className="container">
      <img src="https://ilmhub.uz/assets/images/logo.svg" />
      <div className="anim-origin">
        <button onClick={() => setState(!state)}>Darslar</button>
        <div
          style={
            {
              '--top': top,
              '--left': left,
              transform: state ? 'rotate(45deg)' : 'rotate(0deg)',
              opacity: state ? 0 : 1,
            } as CSSProperties
          }
          className="menus"
        >
          <Lessons lessons={items} />
        </div>
      </div>
    </div>
  )
}

export default App
