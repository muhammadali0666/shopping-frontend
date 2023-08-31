import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PrinterComp } from '../../components/PrintersComp'

export const Printer = () => {
  return (
    <div className='printer_page'>
      <Header/>
      <PrinterComp/>
      <Footer/>
    </div>
  )
}
