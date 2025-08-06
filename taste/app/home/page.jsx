import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '../about/page'
import Contact from '../contact/page'
import Gallery from '../gallery/page'
import ProductsPage from '../products/page'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       <ProductsPage/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home