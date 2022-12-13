"use client";
import { Graph } from "app/Graph";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "src/styles/global.css";

interface IData {
  id: string;
  temperature: string;
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
      const res = await fetch("/api");
      const data: IProps = await res.json();
      const temp: PropsState[] = data.data.map((temp) => ({
        temperature: temp.temperature,
        date: temp.date.toString().replace(/T/, " ").replace(/\..+/, ""),
      }));
      setArr(temp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-slate-700 to-slate-900 flex h-screen justify-center w-full items-center">
        <div className="flex absolute h-2/3 w-2/3 mt-12">
          <div className="flex relative h-full w-full p-8 rounded-2xl font-semibold text-2xl text-neutral-900 backdrop-blur-sm flex-col justify-center items-center bg-black/50 z-20">
            {arr.length > 0 ? (
              <ResponsiveContainer>
                <LineChart
                  data={arr}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#10c8f6"
                  />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="date" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <Graph />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
