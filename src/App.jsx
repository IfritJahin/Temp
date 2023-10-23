import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop';
import Header from './components/Header'
import Footer from './components/Footer'
import useWindowSize from './useWindowSize';
import Reg from './components/Reg';
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  )
}

export default App
