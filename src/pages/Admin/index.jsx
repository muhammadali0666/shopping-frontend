import React from 'react'
import { AdminLayouts } from '../AdminLayouts'
import { AddControlComp } from '../../components/AdminControlComp/ComponentAddControl'
import { ComponentList } from '../../components/AdminControlList/ComponentList'


export const AdminPanel = () => {
  return (
    <div className='admin_page'>
    <AdminLayouts>
      <AddControlComp/>
      <ComponentList/>
    </AdminLayouts>
    </div>
  )
}
