import React from 'react'
import './admin.css'
import LoginForm from './LoginForm'

function page() {
    return (
        <main className='admin-login-panel-container'>
            <LoginForm TOKEN={process.env.TOKEN}/>
        </main>
    )
}

export default page