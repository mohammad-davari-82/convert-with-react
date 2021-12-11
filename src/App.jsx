import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const [input,setInput] = useState("")
  const [factorFrom, setFactorFrom] = useState("")
  const [factorTo, setFactorTo] = useState("")

    const inputHandler = (event) =>{
      setInput(event.target.value)
      console.log(input)
    }
    const handleSelectFrom = (event) => {
      setFactorFrom(event.target.value)
    }
    const handleSelectTo = (event) => {
      setFactorTo(event.target.value)
        console.log(factorTo)
    }
    const handleConvert = () => {
      let res = input * factorFrom / factorTo
      setResult(res)
    
    }
    
  return (
    <>
      <div className="converter-form">
          <Input label="Amount" onChange={inputHandler} />
        <div className="row">
          <Select label="From" items={units} onChange={handleSelectFrom} />
          <Select label="To" items={units} onChange={handleSelectTo} />
          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
