import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ContactComp } from '../../components/ContactComp'

export const Contact = () => {
  return (
    <div className='contact_page'>
      <Header/>
      <ContactComp/>
      <Footer/>
    </div>
  )
}
