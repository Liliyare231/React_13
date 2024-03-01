import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Catalog from './components/catalog/catalog'
import CartPage from './components/cartPage/cartPage'
import UserPage from './components/userPage/UserPage'
import CreatePage from './components/CreatePage/CreatePage'
import Modalka from './components/Modalka/Modalka'





function App(props) {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path='/' element={<Banner />}/>
        <Route path='/catalog' element={<Catalog store={props.store} />}/>
        <Route path='/catalog/:id' element={<CartPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/modalka' element={<Modalka/>}/>
      </Routes>
      <Header />
    </div>
  )
}

export default App
