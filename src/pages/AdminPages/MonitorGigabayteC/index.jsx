import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'
import { AddControlMonitorBrand } from '../../../components/AdminControlComp/MonitorControlBrand'

export const MonitorControlGigabayteC = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlMonitorBrand title='Gigabayte'/>
      <MonitorList title='Gigabayte'/>
    </AdminLayouts>
    </>
  )
}
