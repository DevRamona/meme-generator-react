import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Form from "./Components/Forms"
import Exercise from "./Components/Exercise"

function App() {
  return (
    <div className='w-4/6'>
      <Navbar/>
      <Form/>
      {/* <Exercise
      bookName = "Harry potter"
      bookAuthor = "Junior Mk"
      /> */}
    </div>
  )
}

export default App
