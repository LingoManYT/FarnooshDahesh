import Header from '@/Global Components/Header/Header'
import Image from 'next/image'
import './main.css'
import Greeting_Component from './Greeting_Component/Greeting_Component'
import axios from 'axios'
const jwt = require('jsonwebtoken')
import Scroll_Down_Component from './Scroll_Down_Component'


import Scroll_Down_Icon from '../Icons/Scroll_Down.svg'

// Sections
import Section_Show_Component from './Section_Show_Component/Section_Show_Component'
import About_Me_Component from './About_Me_Component/About_Me_Component'
import Contact_Component from './Contact_Component/Contact_Component'
import Work_Component from './Work_Component/Work_Component'
import Work_Modal_Component from './Work_Modal_Component/Work_Modal_Component'

export default async function Home(params) {
  var Data
  var Error
  const GetProjects = async () => {
    await axios.get('http://localhost:3001/api/projects', {
      headers: {
        Authorization: process.env.TOKEN
      }
    })
      .then(res => {
        if (res.status === 200 && res.data.ok) {
          return Data = jwt.verify(res.data.Data, process.env.SECRET)
        }else {
          return Error = res.data.Message
        }
      })
      .catch(err => { return Error = err })
  }
  await GetProjects()
  return (
    <>
      <div className='container-of-everything'>
        {
          params.searchParams.work ? <Work_Modal_Component work={params.searchParams.work}/> : null
        }
        <Header />
        <main>
          <section className='main-elements-container'>
            <Greeting_Component />
            <About_Me_Component />
            <Contact_Component />
            <Work_Component Works={Data ? Data.slice(0, 6) : null}/>
            <Scroll_Down_Component />
            <Section_Show_Component From_Not_Found_Page={false}/>
          </section>
        </main>
      </div>
    </>
  )
}
