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
    <div className="bg-indigo-900 relative overflow-hidden h-screen ">
      <Image alt="campfire" src={ campfire } className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute">
      </div>
      <div className="container mx-6 justify-center py-32 md:px-8 relative z-10 flex items-center my-20 xl:my-20">
            <div className="py-32 px-56 backdrop-blur-xl bg-white/10 rounded-xl">
              <h1 className="font-bold text-3xl mb-8">Temperatura</h1>
              <span className="font-bold text-3xl uppercase text-yellow-400 flex justify-center">
                {value}
              </span>
            </div>  
        </div>
      </div>
    
  )
}