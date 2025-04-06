import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState('olive');
  function changeColor(color) {
    setColor(color)
  }
  // function whiteColor (){
  //   setColor(color="white")
  // }
  // function redColor (){
  //   setColor(color="red")
  // }
  // function greenColor (){
  //   setColor(color="green")
  // }
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => changeColor('black')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => changeColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: "purple" }}>Perple</button>
          <button onClick={() => changeColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => changeColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: "green" }}>Green</button>

        </div>
      </div>
    </div>
  )
}

export default App
