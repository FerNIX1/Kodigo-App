import React from 'react'
import { Aliados } from '../components/aliados/Aliados'
import { Cards } from '../components/cards/Cards'
import { Home } from '../components/home/Home'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

export const HomePage = () => {
  return (
<>
    <Navbar/>
    <Home/>
    <Cards/>
    <Aliados/>
    <Footer />
</>
  )
}
