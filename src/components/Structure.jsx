import React from 'react'
import { StopWatch } from './StopWatch.jsx';
import { Timer } from './Timer.jsx';
import {useState} from "react"
export const Structure = () => {
const [togglebtn,setTogglebtn]= useState(false)

const toggletimer=()=>{
    setTogglebtn(true)
}
const togglestopwatch=()=>{
    setTogglebtn(false)
}
  return (
    <div className="structuremain">
        <h1  style={{paddingTop: "20px"}}> GOOGLE TIMER - STOPWATCH </h1>
      <div className="structure">
    <button onClick={toggletimer}>TIMER</button>
    <button onClick={togglestopwatch}>STOPWATCH</button>
    {(togglebtn) ? <Timer/>: <StopWatch/>}  
    </div>
    </div>
  )
}