import React from 'react'
import { useState, useEffect} from 'react';
export const Timer = () => {
    const[hour,setHour]= useState("");
    const[min,setMin]= useState("");
    const[sec,setSec]= useState("");
    const[timer,setTimer]= useState(false)
        
    useEffect(() => {

        if(timer){

            var intervalSec=setInterval(()=>{
            if(sec===0){
                clearInterval(intervalSec)
            }else{
                setSec((sec)=>sec-1)
            }
            },1000)
            if(sec===0 && min!==0){

                var intervalMin=setInterval(()=>{
    
                    setMin((min)=>min-1)
                    if(min===0){
                        clearInterval(intervalMin)
                    }
                    else{
                        setSec(60);
                    }
                },1000)
                
            }
            if(min===0 && hour!==0){
    
                var intervalHour=setInterval(()=>{
    
                    setHour((hour)=>hour-1)
                    if(hour===0){
                        clearInterval(intervalHour)
                    }
                    else{
                        setMin(60);
                    }
                },1000)
                
            }

            if(hour===0 && min===0 && sec===0){
                clearInterval(intervalMin)
                clearInterval(intervalSec)
                clearInterval(intervalHour)
            }
        }
    return ()=>{
        clearInterval(intervalMin)
        clearInterval(intervalSec)
        clearInterval(intervalHour)
    }


    },[sec,min,hour,timer])

const handleStart=() => {
setTimer(true)
}
const handleStop=() => {
    setTimer(false)
}
const handleReset=() => {
    setHour(0);
    setMin(0);
    setSec(0);
}
  return (
    <div className="Timer">
        <h1>Timer</h1>
        <div className="timertitle">
        HR : <input  type="number" value={hour}  placeholder="00 Hr" onChange={(e)=>setHour(e.target.value)}/>
        MIN : <input type="number" value={min}  placeholder="00 Min" onChange={(e)=>setMin(e.target.value)}/>
        SEC :<input type="number" value={sec}  placeholder="00 Sec" onChange={(e)=>setSec(e.target.value)}/>
        </div>
        <div className="timerbutton">
        <button onClick={handleStart}>START</button>
        <button  onClick={handleStop}>STOP</button>
        <button  onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}