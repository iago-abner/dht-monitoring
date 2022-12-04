"use client";
import { toNumber } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import campfire from "../../assets/firecamp.jpg";
import "../global.css";

interface IData {
  id: string;
  temperature?: string;
  humidity?: string;
  date: string;
}

interface IProps {
  data: IData[];
}

export default function Dashboard() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleFetchData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleFetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/");
      const data: IProps = await res.json();
      const temp = toNumber(data.data.at(-1)?.temperature);
      setValue(temp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen ">
      <Image
        alt="campfire"
        src={campfire}
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-6 justify-center py-32 md:px-8 relative z-10 flex items-center my-20 xl:my-20">
        {/* <div className="py-32 px-56 backdrop-blur-xl bg-white/10 rounded-xl"> */}
        <div className="flex flex-col pt-10 pb-32  px-56 backdrop-blur-xl bg-white/25 rounded-xl">
          <h1 className="flex top-2 font-bold text-3xl mb-16 text-indigo-900">
            Temperatura
          </h1>
          <span className="font-bold text-3xl uppercase text-yellow-600 flex justify-center">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
