import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutHpC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Hp'/>
      <ComputerList title='Hp'/>
    </AdminLayouts>
  )
}
