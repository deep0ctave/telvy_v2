import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drawer from './Drawer.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Drawer showSidebar={true}>
        <div><p>Main content goes here !</p></div>
      </Drawer>
      <Footer></Footer>
    </>
  )
}

export default Login
