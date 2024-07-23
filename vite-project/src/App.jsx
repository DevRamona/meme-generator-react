import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Form from "./Components/Forms"
import Exercise from "./Components/Exercise"
import Castle from './Components/Castle'
import Window from './Components/Window'
import Door from './Components/Door'

function App() {
  return (
    <div className='w-4/6'>
      <Navbar/>
      <Form/>
      
    </div>
  )
}

export default App
