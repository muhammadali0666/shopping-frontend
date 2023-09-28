import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlmonitor } from '../../../components/AdminControlComp/AddMonitor'
import { MonitorAllList } from '../../../components/AdminControlList/MonitorAllList'

export const MonitorControlpage = () => {
  return (
    <>
    <AdminLayouts>
      <AddControlmonitor/>
      <MonitorAllList/>
    </AdminLayouts>
    </>
  )
}
