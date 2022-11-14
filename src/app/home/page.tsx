'use client'

import Image from 'next/image'
import campfire from '../assets/firecamp.jpg'
import '../global.css'

export default function Realtime(){
  return(
    <div className="bg-indigo-900 relative overflow-hidden h-screen flex items-center">
        <Image alt="campfire" src={ campfire } className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute">
        </div>
        
        <div className="container mx-auto px-2 fixed z-10 flex items-center justify-center py-32">
          <div className="lg:w-4/5 xl:w-4/5 flex flex-col items-center justify-center relative z-10">
            <h1 className="Sfont-bold text-6xl sm:text-7xl text-white leading-tight" >
              EM MANUTENÇÃO
            </h1>
          </div>
        </div>
      </div>
  )
}
