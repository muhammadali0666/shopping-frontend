import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { MonitorList } from '../../../components/AdminControlList/MonitorList'
import { AddControlMonitorBrand } from '../../../components/AdminControlComp/MonitorControlBrand'

export const MonitorControlMSIC = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlMonitorBrand title='MSI'/>
      <MonitorList title='MSI'/>
    </AdminLayouts>
    </>
  )
}
