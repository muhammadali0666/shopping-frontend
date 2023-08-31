import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PlanshetComp } from '../../components/PlanshetComp'

export const Planshet = () => {
  return (
    <div className='planshet'>
      <Header/>
      <PlanshetComp/>
      <Footer/>
    </div>
  )
}
