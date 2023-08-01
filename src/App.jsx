import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
