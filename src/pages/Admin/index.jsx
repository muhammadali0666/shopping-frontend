import React from 'react'
import { AdminLayouts } from '../AdminLayouts'
import { AddControlComp } from '../../components/AdminControlComp/ComponentAddControl'


export const AdminPanel = () => {
  return (
    <div className='admin_page'>
    <AdminLayouts>
      <AddControlComp/>
    </AdminLayouts>
    </div>
  )
}
