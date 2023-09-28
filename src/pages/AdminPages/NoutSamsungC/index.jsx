import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutSamsungC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Samsung'/>
      <ComputerList title='Samsung'/>
    </AdminLayouts>
  )
}
