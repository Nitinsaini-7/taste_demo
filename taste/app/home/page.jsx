import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '../about/page'
import Contact from '../contact/page'
import Gallery from '../gallery/page'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default Home