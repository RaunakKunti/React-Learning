import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(()=>{
    //I will use this function again and again. Thats why I will use useCallback hook. It is a react hook that lets you cache a function definition between re-renders.

    // Step1-> initialize random password
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+~"

    //Step2-> pick random characters from the password
    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random()*str.length+1)
      // pass+=str[char];
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])//dependency array. as long as they not change too frequently we will use useCallback

  //useEffect hook runs whenever a component changes in dependency array

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  //copy password to clipboard
  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    //using useRef hook
    passwordRef.current?.select();
  }

  //useRef hook
  const passwordRef = useRef(null)

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor='length'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=> {
              setCharAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
