import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const NoutAcerC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer title='Acer'/>
      <ComputerList/>
    </AdminLayouts>
  )
}
