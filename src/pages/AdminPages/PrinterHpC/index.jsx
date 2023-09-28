import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlPrinter } from '../../../components/AdminControlComp/PrinterAddControl'
import { PrinterList } from '../../../components/AdminControlList/PrinterList'


export const PrinterHpC = () => {
  return (
    <AdminLayouts>
      <AddControlPrinter title='Hp'/>
      <PrinterList title='Hp'/>
    </AdminLayouts>
  )
}
