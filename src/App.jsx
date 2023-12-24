import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop';
import Header from './components/Header'
import Footer from './components/Footer'
import useWindowSize from './useWindowSize';
import Reg from './components/Reg';
import Contact from './components/Contact';
import Help from './components/Help';
import Checkout from './components/Checkout';
function App() {
  const { height } = useWindowSize();
  return (
    <Router>
      <div>

        <div style={{ minHeight: height }}>
          <Header />
          <Routes>
            <Route path='/Temp/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/myaccount' element={<Reg />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/help' element={<Help />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >

  )
}

export default App
