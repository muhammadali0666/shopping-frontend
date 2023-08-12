import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'

export const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}
