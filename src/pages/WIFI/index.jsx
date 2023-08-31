import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { WiFiComp } from '../../components/WiFiComp'

export const WiFi = () => {
  return (
    <div className='wifi_page'>
      <Header/>
      <WiFiComp/>
      <Footer/>
    </div>
  )
}
