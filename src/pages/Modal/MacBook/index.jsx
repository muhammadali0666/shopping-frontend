import React from 'react'
import { Header } from '../../../components/Header'
import {Footer} from "../../../components/Footer"
import {Card} from "../../../components/Card"
import "./style.css"

export const MacBook = () => {
  return (
    <div className='macbook_page'>
      <Header/>
      <div className="macbook">
        <div className="container">
          <div className="macbook_inner">
          <h2 className="macbook_paragraph">
          MacBook
        </h2>
        <ul className="macbook_list">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
