import { Card } from "../Card"
import "./monitor.css"

import React from 'react'

export const MonitorComp = () => {
  return (
    <div className="monitor">
      <div className="container">
        <div className="monitor_inner">
          <h2 className="monitor_paragraph">
            Monitorlar
          </h2>
          <ul className="monitor_list">
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
