'use client'
import React, { useEffect } from 'react'
import './Greeting_Component.css'
import Image from 'next/image'
import Server_Side_Tags from './Server_Side_Tags'




function Greeting_Component() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const Scroll_Position = document.documentElement.scrollTop
            const ContainerElement = document.getElementById('greeting-component-container')
            if (Scroll_Position >= 0 && Scroll_Position < 300) {
                ContainerElement.classList.remove("deactive")
            } else {
                ContainerElement.classList.add("deactive")
            }
        })
    }, [])
    return (
        <article className='greeting-component-container' id='greeting-component-container'>
            <Server_Side_Tags />
        </article>
    )
}

export default Greeting_Component