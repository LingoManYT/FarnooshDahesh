'use client'
import React, { useEffect } from 'react'
import './Contact_Component.css'
import Server_Side_Tags from './Server_Side_Tags'


function Contact_Component() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const Scroll_Position = document.documentElement.scrollTop
            const ContainerElement = document.getElementById('contact-container')
            if (Scroll_Position >= 1000) {
                ContainerElement.classList.add("active")
            } else {
                ContainerElement.classList.remove("active")
            }
        })
    }, [])
    return (
        <section className='contact-container' id='contact-container'>
            <Server_Side_Tags />
        </section>
    )
}

export default Contact_Component