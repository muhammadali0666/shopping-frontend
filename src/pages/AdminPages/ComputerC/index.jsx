import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlComputer } from '../../../components/AdminControlComp/ComputerAddControl'
import { ComputerList } from '../../../components/AdminControlList/ComputerList'

export const ComputerControlC = () => {
  return (
    <AdminLayouts>
      <AddControlComputer/>
      <ComputerList/>
    </AdminLayouts>
  )
}
