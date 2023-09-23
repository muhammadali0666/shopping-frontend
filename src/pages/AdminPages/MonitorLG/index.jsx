import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'
import { AddControlMonitorBrand } from '../../../components/AdminControlComp/MonitorControlBrand'

export const MonitorControlLGC = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlMonitorBrand title='LG'/>
      <MonitorList/>
    </AdminLayouts>
    </>
  )
}