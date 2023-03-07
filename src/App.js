import './App.less'
import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import LoginRegister from './pages/loginRegister'
import Dashboard from './pages/home/dashboard'
import OrderList from './pages/home/orderList'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'loginRegister'} />}></Route>
        <Route path='/home' element={<Navigate to={'dashboard'} />}></Route>
        <Route path='/home' element={<Home />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='orderList' element={<OrderList />}></Route>
        </Route>
        <Route path='/loginRegister' element={<LoginRegister />}></Route>
      </Routes>
    </HashRouter>
  )
}
