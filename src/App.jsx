import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/search" element={<Search />} />
        </Routes>
    </Router>
  )
}

export default App
