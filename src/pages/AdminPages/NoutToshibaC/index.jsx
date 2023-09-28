import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutToshibaC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Toshiba'/>
      <ComputerList title='Toshiba'/>
    </AdminLayouts>
  )
}
