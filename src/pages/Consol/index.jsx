import React from 'react'
import { ConsoleComp } from '../../components/ConsollsComp'
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"

export const Consol = () => {
  return (
    <div className='consol_page'>
      <Header/>
      <ConsoleComp/>
      <Footer/>
    </div>
  )
}
