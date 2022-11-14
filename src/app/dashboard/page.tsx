'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import campfire from '../assets/firecamp.jpg';
import '../global.css';

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
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <Image alt="campfire" src={ campfire } className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute">
      </div>
      <div className="container mx-auto justify-center px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <span className="font-bold uppercase text-yellow-400">
              {value}
            </span>
        </div>
      </div>
    
  )
}