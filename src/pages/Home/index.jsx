import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/Hero'
import { Product } from '../../components/Product'
import { GameZone } from '../../components/GameZone'
import { Partner } from '../../components/Partner'

export const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Hero/>
      <Product/>
      <GameZone/>
      <Partner/>
      <Footer/>
    </div>
  )
}
