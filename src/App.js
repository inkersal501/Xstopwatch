import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(()=>{
    let timer;
    if(running){
      timer = setInterval(() => {
        setTime((time)=>time+1);
      }, 1000);
    }else{
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);


  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <p>Time : {formatTime(time)}</p>
      <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
        
        {!running && <button onClick={()=>setRunning(true)}>Start</button>}

        {running && <button onClick={()=>setRunning(false)}>Stop</button>}

        <button onClick={()=>{setRunning(false);setTime(0);}}>Reset</button>

      </div>
    </div>
  );
}

export default App;
