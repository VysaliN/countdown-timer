import React,{useEffect, useState} from 'react'
import Count from './Count'
import './Count.css'

const App = () => {
  const endTime = new Date('November 1,2022 12:00:00').getTime();
  const [time,setTime]=useState(new Date().getTime());
  const gap = endTime-time;

  const seconds=1000;
  const minutes=seconds*60;
  const hours=minutes*60;
  const days=hours*24;

  const remainingDays = Math.floor(gap/days);
  const remainingHours = Math.floor((gap%days)/hours);
  const remainingMinutes = Math.floor((gap%hours)/minutes);
  const remainingSeconds = Math.floor((gap%minutes)/seconds);

  useEffect(()=>{
    setTimeout(()=>setTime(new Date().getTime()),1000);
  } ,[time])

  return (
    <div>
      <center>
      <Count days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds} />
      </center>
    </div>
  )
}

export default App