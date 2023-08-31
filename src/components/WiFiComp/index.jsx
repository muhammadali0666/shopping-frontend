import React from 'react'
import { Card } from '../Card'
import "./wifi.css"

export const WiFiComp = () => {
  return (
    <div className='wifi'>
      <div className="container">
        <div className="wifi_inner">
          <h2 className="wifi_paragraph">
            Tarmoq Apparati
          </h2>
          <ul className="wifi_list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  )
}
