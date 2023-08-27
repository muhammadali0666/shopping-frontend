import React from 'react'
import { ComputerComp } from '../../components/ComputerComp'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Computer = () => {
  return (
    <div className='computer'>
      <Header/>
      <ComputerComp/>
      <Footer/>
    </div>
  )
}
