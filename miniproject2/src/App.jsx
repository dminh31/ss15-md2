import React from 'react'
import { Routes, Route } from "react-router-dom"
import ListProduct from './components/ListProduct'
import Cart from './components/Cart'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListProduct></ListProduct>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}
