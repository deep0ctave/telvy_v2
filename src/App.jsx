import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drawer from './Drawer.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Drawer></Drawer>
      <Footer></Footer>
    </>
  )
}

export default App
