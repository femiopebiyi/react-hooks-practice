
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

   const inputRef = useRef<HTMLInputElement>(null);

     useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current?.focus();
  }, []);



  return (
    <div>
      <input ref={inputRef} type="text" value="femi is the goat"/>
      <button onClick={() => {
        inputRef.current?.focus(); console.log(inputRef.current?.value)}}>Focus Input</button>
    </div>
  )
}

export default App
