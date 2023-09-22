import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MouseComp } from '../../components/MouseComp'

export const Mouse = () => {
  return (
    <div className='monitors_page'>
      <Header/>
      <MouseComp/>
      <Footer/>
    </div>
  )
}
