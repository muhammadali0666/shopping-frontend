import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MonitorComp } from '../../components/MonitorComp'

export const Monitors = () => {
  return (
    <div className='monitors_page'>
      <Header/>
      <MonitorComp/>
      <Footer/>
    </div>
  )
}
