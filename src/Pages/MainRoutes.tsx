import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Home from './Home'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product-Page' ></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes