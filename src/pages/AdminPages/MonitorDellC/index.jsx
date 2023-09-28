import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'
import { AddControlMonitorBrand } from '../../../components/AdminControlComp/MonitorControlBrand'

export const MonitorControlDellC = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlMonitorBrand title='Dell'/>
      <MonitorList title='Dell'/>
    </AdminLayouts>
    </>
  )
}
