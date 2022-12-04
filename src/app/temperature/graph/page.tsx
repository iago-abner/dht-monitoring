"use client";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "src/app/global.css";

interface IData {
  id: string;
  temperature?: string;
  humidity?: string;
  date: string;
}

interface IProps {
  data: IData[];
}

interface PropsState {
  temperature: string;
  date: string;
}

export default function GraphTemp() {
  const [arr, setArr] = useState<PropsState[]>([]);

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
      const temp = data.data.map((temp) => {
        const x: any = {};
        x["temperature"] = temp.temperature;
        x["date"] = temp.date;
        return x;
      });
      console.log("aq:", temp);
      setArr(temp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={`bg-gradient-to-t from-gray-400 to-gray-700 flex h-screen justify-center w-full items-center`}
      >
        <div className="flex absolute h-2/3 w-2/3 mt-12">
          {/* <Image
            alt="dsad"
            src={bg}
            className="w-full h-full rounded-2xl z-10"
          /> */}
          <div className="flex absolute h-full w-full rounded-2xl font-semibold text-2xl text-neutral-900 backdrop-blur-sm flex-col justify-center items-center bg-black/20 z-20">
            <LineChart
              width={900}
              height={400}
              data={arr}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="temperature" stroke="#dcc31e" />
              <CartesianGrid stroke="#212121" strokeDasharray="5 5" />
              <XAxis dataKey="date" stroke="#212121" />
              <YAxis stroke="#212121" />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      </div>
    </>
  );
}
