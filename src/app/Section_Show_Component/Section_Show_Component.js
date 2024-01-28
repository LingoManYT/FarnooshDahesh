'use client'
import React, { useEffect } from 'react'
import './Section_Show_Component.css'

function Section_Show_Component({ From_Not_Found_Page }) {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const Scroll_Position = document.documentElement.scrollTop
            const Home_Child = document.getElementById('home-child')
            const About_Me_Child = document.getElementById('about-me-child')
            const Work_Child = document.getElementById('work-child')
            const contact_Child = document.getElementById('contact-child')
            if (!From_Not_Found_Page) {
                if (Scroll_Position >= 0 && Scroll_Position < 300) {
                    Home_Child.classList.add("active")
                    About_Me_Child.classList.remove("active")
                    Work_Child.classList.remove("active")
                    contact_Child.classList.remove("active")
                } else {
                    Home_Child.classList.remove("active")
                }
                if (Scroll_Position >= 300 && Scroll_Position < 600) {
                    Home_Child.classList.remove("active")
                    About_Me_Child.classList.add("active")
                    Work_Child.classList.remove("active")
                    contact_Child.classList.remove("active")
                } else {
                    About_Me_Child.classList.remove("active")
                }
                if (Scroll_Position >= 600 && Scroll_Position < 1000) {
                    Home_Child.classList.remove("active")
                    About_Me_Child.classList.remove("active")
                    Work_Child.classList.add("active")
                    contact_Child.classList.remove("active")
                } else {
                    Work_Child.classList.remove("active")
                }
                if (Scroll_Position >= 1000) {
                    Home_Child.classList.remove("active")
                    About_Me_Child.classList.remove("active")
                    Work_Child.classList.remove("active")
                    contact_Child.classList.add("active")
                } else {
                    contact_Child.classList.remove("active")
                }
            }
        })
    }, [])
  return (
    <section className='section-show-container'>
        <div className={From_Not_Found_Page ? 'section-show-child' : 'section-show-child active'} id='home-child'>
            <p>Home</p>
            <span></span>
        </div>
        <div className='section-show-child' id='about-me-child'>
            <p>About me</p>
            <span></span>
        </div>
        <div className='section-show-child' id='work-child'>
            <p>Work</p>
            <span></span>
        </div>
        <div className='section-show-child' id='contact-child'>
            <p>Contact</p>
            <span></span>
        </div>
    </section>
  )
}

export default Section_Show_Component