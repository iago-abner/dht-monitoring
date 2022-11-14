'use client'
import Image from 'next/image'
import campfire from './assets/firecamp.jpg'
import './global.css'

export default function Home(){
  return(
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <Image alt="campfire" src={ campfire } className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute">
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start ml-4 relative z-10">
            <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
              Sistema para monitoramento
              <br />
              da temperatura ambiente
            </h1>
          </div>
        </div>
      </div>
  )
}
