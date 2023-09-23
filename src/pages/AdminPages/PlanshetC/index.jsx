import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlPlanshet } from '../../../components/AdminControlComp/PlanshetAddControl'
import { PlanshetList } from '../../../components/AdminControlList/PlanshetList'

export const PlanshetC = () => {
  return (
    <AdminLayouts>
      <AddControlPlanshet/>
      <PlanshetList/>
    </AdminLayouts>
  )
}
