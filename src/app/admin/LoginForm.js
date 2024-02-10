'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { StoreDataInSession, CheckCookie } from './ServerAction'

function Form({ TOKEN }) {
    const Router = useRouter()
    const [Error, SetError] = useState()
    const Login = async (e) => {
        e.preventDefault()
        await axios.post('https://api.farnooshdahesh.com/login', {
            Username: e.target.username_input.value,
            Password: e.target.password_input.value
        }, {
            headers: {
                Authorization: TOKEN
            }
        })
            .then(res => {
                if (res.status === 200 && res.data.ok) {
                    StoreDataInSession(res.data.Data)
                    setTimeout(() => {
                        Router.push("admin/panel")
                    }, 100);
                } else {
                    SetError(res.data.Message)
                }
            })
            .catch(err => { SetError(err) })
    }

    useEffect(() => {

        const UserNameInput = document.getElementById("username-input")
        const UserNamePlaceHolder = document.getElementById("username-placeholder")

        const PasswordInput = document.getElementById("password-input")
        const PasswordPlaceHolder = document.getElementById("password-placeholder")

        UserNameInput.addEventListener('focus', () => {
            UserNamePlaceHolder.style.transform = 'translateY(-20px)'
            UserNamePlaceHolder.style.fontSize = '14px'
        })
        UserNameInput.addEventListener('focusout', () => {
            if (UserNameInput.value.length <= 0) {
                UserNamePlaceHolder.style.transform = 'translateY(0px)'
                UserNamePlaceHolder.style.fontSize = '18px'
            }
        })


        PasswordInput.addEventListener('focus', () => {
            PasswordPlaceHolder.style.transform = 'translateY(-20px)'
            PasswordPlaceHolder.style.fontSize = '14px'
        })
        PasswordInput.addEventListener('focusout', () => {
            if (PasswordInput.value.length <= 0) {
                PasswordPlaceHolder.style.transform = 'translateY(0px)'
                PasswordPlaceHolder.style.fontSize = '18px'
            }
        })

    }, [])
    return (
        <form onSubmit={(e) => { Login(e) }} className='admin-login-panel'>
            <div className='inputs-container'>
                <section className='username-input-container'>
                    <input type='text' id='username-input' name='username_input' />
                    <p id='username-placeholder'>UserName</p>
                </section>
                <section className='password-input-container'>
                    <input type='password' id='password-input' name='password_input' />
                    <p id='password-placeholder'>Password</p>
                </section>
                {
                    Error ? <p className='error-text'>{Error ? Error : null}</p> : null
                }
            </div>
            <button type='submit' className='login-button'>Login</button>
        </form>
    )
}

export default Form
