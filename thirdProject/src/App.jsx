import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card1 companyName="TCS" post="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
      <Card1 companyName="Google" post="loremefoue8r fhbfefb ffh ffhfurhf dhe8urhsf df efeur94u cef8ue9r f"/>
      <Card1/>
      <Card1/>
    </>
  )
}

export default App
