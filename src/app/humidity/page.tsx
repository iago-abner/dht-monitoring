"use client";
import { toNumber } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import hot from "src/assets/images/hot.gif";
import { GraphButton } from "../../components/GraphButton";
import "../../styles/global.css";

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
      const res = await fetch("/api");
      const data: IProps = await res.json();
      const hum = toNumber(data.data.at(-1)?.humidity);
      setValue(hum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-700 to-slate-900 h-screen flex flex-col justify-center w-full items-center ">
      <h1 className="flex top-2 font-bold text-3xl text-white">Umidade</h1>
      <div className="container  justify-center z-10 flex items-center my-10">
        <div className="w-2/6 h-40 backdrop-blur-xl bg-black/50 rounded-xl flex items-center lg:mr-16">
          <div className="hidden bg-white lg:flex w-32 h-32 rounded-md p-2 m-3 justify-start">
            <Image
              alt="temperature-icon"
              src={hot}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-0 lg:mr-12">
              {value}
            </h1>
          </div>
        </div>
      </div>
      <GraphButton
        href="/humidity/graph"
        className="flex  z-20 h-12 w-28 mt-2 mb-12 justify-center text-lg font-semibold text-white items-center bg-gradient-to-r rounded-lg from-cyan-500 to-blue-500 hover:opacity-80 hover:text-gray-800"
      >
        Gráfico
      </GraphButton>
    </div>
  );
}
