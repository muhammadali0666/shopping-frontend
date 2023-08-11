import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Register } from '../pages/Register'
import {Login} from "../pages/Login"
import { Home } from '../pages/Home'

export const RouterWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}
