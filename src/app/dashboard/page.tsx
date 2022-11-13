'use client';
import { useEffect, useState } from "react";

interface Data {
  value: number,
  date: string,
  id: number
}

export default function Dashboard(){
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 5000);
  return () => clearInterval(interval);
  }, []);

  const getData = async () => {
    try{
      const res = await fetch('http://localhost:3000/api/')
      const data: Array<Data> = await res.json()

      const temperature = data.at(-1)?.value
      temperature !== undefined ? setValue(temperature) : setValue(0)
      
    }catch(err){
      console.log(err)
    }
  }

  return(
    <h1>
      {
        value
      }  
    </h1>
  )
}