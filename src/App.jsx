import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="our program" title="What We Offer"></Title>
        <Programs></Programs>
        <About></About>
        <Title subTitle="Gallery" title="Campus Photos" ></Title>
        <Campus></Campus>
         <Title subTitle="Testmonials" title="What Student Says" ></Title>
         <Testimonials></Testimonials>
          <Title subTitle="contact us" title="Get in Touch" ></Title>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    </div>
  )
}

export default App
