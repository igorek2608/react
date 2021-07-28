import React,{useState, useEffect} from 'react'
import '../CSS/Timer.css'


function Timer() {
    const[second, setSecond]=useState('00');
    const[minute, setMinute]=useState('00');
    const[isActive,setActive]=useState(false);
    const[counter,setCounter]=useState(0);


    useEffect(()=>{
        let interval;
        if(isActive){
            interval=setInterval(()=>{
                const secondCounter=counter%60;
                const minuteCounter=Math.floor(counter/60);

                let computedSecond=String(secondCounter).length===1
                ? `0${secondCounter}`
                : secondCounter;

                let computedMinute=String(minuteCounter).length===1
                ? `0${minuteCounter}`
                : minuteCounter;


                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter((counter)=>counter+1);
            },1000)
        }
        return ()=>clearInterval(interval);
    },[isActive, counter]);


        function resetTimer(){
            setSecond('00');
            setMinute('00');
            setActive(false);
            setCounter(0)

        };
    
    return (
        <div className="box">
            <div >
                <span className="time">{minute}</span>
                <span className="time">:</span>
                <span className="time">{second}</span>
            </div>
            <div>
                <button className="button button-start" onClick={()=>setActive(!isActive)}>{isActive?'Pause':'Start'}</button>
                <button className="button button-reset" onClick={resetTimer}>Reset</button>
            </div>
            
        </div>
    )
}

export default Timer
