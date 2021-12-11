import React, { useState,useEffect } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const [state,setState] = useState({
        input : 0,
        factorFrom:0,
        factorTo:0,
  })
  useEffect(() => {
    console.log("input",state.input)
    console.log("factorTo",state.factorTo)
    console.log("factorFrom",state.factorFrom)
    console.log("result",result)

  });

    const inputHandler = (event) =>{
      setState({...state,input:event.target.value})
    
    }
    const handleSelectFrom = (event) => {
      setState({...state ,factorFrom:event.target.value})
    }
    const handleSelectTo = (event) => {
      setState({...state,factorTo:event.target.value})
        
    }
    const handleConvert = () => {
     
      setResult( state.input * state.factorFrom / state.factorTo)
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
