import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LaptopAcssesuarComp } from '../../components/LaptopAccsessuarComp'

export const LaptopAcsessuar = () => {
  return (
    <div className='laptop_acsesuar'>
      <Header/>
      <LaptopAcssesuarComp/>
      <Footer/>
    </div>
  )
}
