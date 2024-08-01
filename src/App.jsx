import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sektion from './components/Sektion'
import { Route, Routes } from 'react-router-dom'
import Races from './pages/Races'
import Shuter from './pages/Shuter'
import Strategion from './pages/Strategion'
import Ekshen from './pages/Ekshen'
import Horor from './pages/Horor'
import Pesoc from './pages/Pesoc'
import Stels from './pages/Stels'
import Simuleitor from './pages/Simuleitor'
import Cek from './components/Cek'
import Nosi from './components/Nosi'



const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Nosi />
      <Sektion />
      <Routes>
        <Route path='/ekshen' element={<Ekshen/>}/ >
        <Route path='/races' element={<Races/>}/ >
        <Route path='/' element={<Shuter/>}/ >
        <Route path='/strategion' element={<Strategion/>}/ >
        <Route path='/horor' element={<Horor/>}/ >
        <Route path='/pesoc' element={<Pesoc/>}/ >
        <Route path='/stels' element={<Stels/>}/ >
        <Route path='/simuleitor' element={<Simuleitor/>}/ >
      </Routes>
      <Cek />
    </>
  )
}

export default App