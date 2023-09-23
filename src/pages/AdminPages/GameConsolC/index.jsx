import React from 'react'
import { AdminLayouts } from '../../AdminLayouts'
import { AddControlConsol } from '../../../components/AdminControlComp/GameConsolControl'
import { ConsolList } from '../../../components/AdminControlList/ConsolList'


export const ConsolC = () => {
  return (
    <AdminLayouts>
     <AddControlConsol/>
     <ConsolList/>
    </AdminLayouts>
  )
}
