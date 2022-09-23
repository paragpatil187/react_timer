import React from 'react'
import {useState, useEffect} from 'react'
export const StopWatch = () => {

const [time,setTime]=useState(0)
const [timer,setTimer]=useState(false)

useEffect (()=>{

    if(timer){

        var timerId=setInterval(() => {
            setTime((time)=>time+10)
        },1)
    }
    return ()=>{
        clearInterval(timerId)
    }
},[timer])

const handleStart=() => {
    setTimer(true)
} 
const handleStop=() => {
        setTimer(false)
    }
const handleReset = () => {
    setTime(0)   
    setTimer(false)
    }

  return (
    <div className="Timer">
        <h1>Stop-Watch</h1>
        <div className="stopwatchspan">
        <span>{("0"+Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)} : HR  </span>    
        <span>{("0"+Math.floor((time / (1000 * 60)) % 60)).slice(-2)} : MIN </span>
        <span>{("0"+Math.floor((time / 1000) % 60)).slice(-2)} : SEC </span>
        <span>{("0"+Math.round(time % 1000)).slice(-3)} : MS  </span>
        </div>
        <div  className="stopwatchbutton">
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}