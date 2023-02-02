import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card'
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav />
     <Routes>

     <Route path='/' element={<Main/>}/>
     <Route path='/cities' element={<Card/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
