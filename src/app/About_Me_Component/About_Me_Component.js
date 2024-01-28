'use client'
import React, { useEffect } from 'react'
import './About_Me_Component.css'
import Server_Side_Tags from './Server_Side_Tags'

function About_Me_Component() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const Scroll_Position = document.documentElement.scrollTop
            const ContainerElement = document.getElementById('about-me-container')
            if (Scroll_Position >= 300 && Scroll_Position < 600) {
                ContainerElement.classList.add("active")
            } else {
                ContainerElement.classList.remove("active")
            }
        })
    }, [])
  return (
    <section className='about-me-container' id='about-me-container'>
        <Server_Side_Tags />
    </section>
  )
}

export default About_Me_Component