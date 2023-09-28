import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'
import { AddControlMonitorBrand } from '../../../components/AdminControlComp/MonitorControlBrand'

export const MonitorControlAcerC = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlMonitorBrand title='Acer'/>
      <MonitorList title='Acer'/>
    </AdminLayouts>
    </>
  )
}
