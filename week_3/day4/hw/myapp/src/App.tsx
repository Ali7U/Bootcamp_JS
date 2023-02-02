import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav/>
     <Main/>
     <Card/>
     <Footer/>
    </div>
  )
}

export default App
