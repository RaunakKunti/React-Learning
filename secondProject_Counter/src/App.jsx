import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCounter] = useState(0);

  //add 1 everytime
  // const addCount = ()=>{
  //   setCounter(count+1);
  //   console.log(count);
  // }

  //remove 1 everytime
  // const removeCount = ()=>{
  //   setCounter(count-1);
  //   console.log(count);
  // }

  // add 3 everytime by adding 1 3 times
  const addCount = ()=>{
    // setCounter(count+1)
    // setCounter(count+1)
    // setCounter(count+1)
    // it uses old state value everytime tht's why value is not updated at once
    setCounter((count)=> count+1);
    setCounter((count)=> count+1);
    setCounter((count)=> count+1);
    console.log(count);
    // It uses new state value everytime
    
  }
  // subtract 3 everytime
  const removeCount = ()=>{
    setCounter((count)=> count-1);
    setCounter((count)=> count-1);
    setCounter((count)=> count-1);
    console.log(count);
  }
  return (
    <>
      
      <h1>My first React App</h1>
      <p>Counter: {count}</p>
      <button onClick={addCount}>Add Count</button>{" "}
      <button onClick={removeCount}>Remove Count</button>
      <footer>result: {count}</footer>
    </>
  )
}

export default App
