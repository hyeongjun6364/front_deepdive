import React, { useRef, useState,useEffect } from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({ title, targetTime }) {
    const [timerExpired,setTimerExpired] = useState(false);
    const [timerStarted,setTimerStarted] = useState(false);
    
    const timer=useRef();
    const dialog=useRef();
    useEffect(() => {
        // Ensure the modal is closed when the component mounts
        dialog.current.close();
    }, []);
    function handleStart(){
        timer.current=setTimeout(()=>{
            setTimerExpired(true);
            dialog.current.showModal();
        },targetTime * 1000);
        setTimerStarted(true);
        
    }
    
    function handleStop(){
        clearTimeout(timer.current);
    }
   
    return (
        <>
        <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
         <section>
            <h2>{title}</h2>
            {timerExpired && <p>you lost</p>}
            <p>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={handleStart}>Start Challenge</button>
                <button onClick={handleStop}>Sopt Challenge</button>
            </p>
        </section>
        </>
       
    )
}

export default TimerChallenge