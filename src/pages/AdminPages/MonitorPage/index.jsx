import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlmonitor } from '../../../components/AdminControlComp/AddMonitor'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'

export const MonitorControlpage = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlmonitor/>
      <MonitorList/>
    </AdminLayouts>
    </>
  )
}
