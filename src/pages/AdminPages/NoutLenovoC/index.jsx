import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutLenovoC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Lenovo'/>
      <ComputerList title='Lenovo'/>
    </AdminLayouts>
  )
}
