import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import LifeSection from '../components/LifeSection'
import Footer from '../components/Footer'
import CardSection from '../components/CardSection'
import TestimonialsSection from '../components/TestimonialsSection'
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      < HeroSection ></HeroSection >
      <AboutSection></AboutSection>
      <CardSection></CardSection>
      <TestimonialsSection></TestimonialsSection>
      <LifeSection></LifeSection>
      <Footer></Footer>
    </>
  )
}

export default Home


