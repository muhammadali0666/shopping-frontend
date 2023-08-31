import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { KalonkaComp } from '../../components/KalonkaComp'

export const Kalonkalar = () => {
  return (
    <div className='kalonkalr_page'>
      <Header/>
      <KalonkaComp/>
      <Footer/>
    </div>
  )
}
