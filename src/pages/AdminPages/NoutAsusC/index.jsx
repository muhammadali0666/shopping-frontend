import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutAsusC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Asus'/>
      <ComputerList title='Asus'/>
    </AdminLayouts>
  )
}
