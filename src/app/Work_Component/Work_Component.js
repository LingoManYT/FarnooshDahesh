'use client'
import React, { useEffect } from 'react'
import './Work_Component.css'
import Work_Card_Component from './Work_Card_Component/Work_Card_Component'
import Server_Sidde_Tags from './Server_Sidde_Tags'

function Work_Component({ Works }) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const Scroll_Position = document.documentElement.scrollTop
      const ContainerElement = document.getElementById('work-container')
      if (Scroll_Position >= 600 && Scroll_Position < 1000) {
        ContainerElement.classList.add("active")
      } else {
        ContainerElement.classList.remove("active")
      }
    })
  }, [])
  return (
    <section className='work-container' id='work-container'>
      {
        Works ? <Server_Sidde_Tags Works={Works}/> : <p style={{ color: 'white', fontSize: 20 }}>Projects Not Found</p>
      }
    </section>
  )
}

export default Work_Component