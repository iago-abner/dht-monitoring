import Image from "next/image";
import { BiMicrochip } from "react-icons/bi";
import { MdSensors } from "react-icons/md";
import { SiMongodb, SiPrisma, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import penguins from "src/assets/images/penguins.png";
import "src/styles/global.css";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-700 to-slate-900 flex h-screen justify-center w-full items-center">
        <div className=" flex justify-around items-center w-full mt-8">
          <div className="ml-4 flex flex-col items-center justify-center">
            <h1 className="ml-28 text-6xl md:text-7xl mb-8 text-white">
              Sistema para
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                monitoramento de temperatura{" "}
              </p>
              ambiente
            </h1>

            <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-8 mt-4 md:grid-rows-2 md:grid-cols-3">
              <div className="flex relative w-full justify-center">
                <MdSensors className="text-white h-6 w-6 md:h-10 md:w-10" />
                <span className="text-3xl text-white ml-2 mr-8">DHT11</span>
              </div>
              <div className="flex relative w-full justify-center">
                <BiMicrochip className="text-white h-10 w-10  " />
                <span className="text-3xl text-white ml-2 mr-8">ESP32</span>
              </div>
              <div className="flex relative w-full justify-center">
                <TbBrandNextjs className="text-white h-10 w-10" />
                <span className="text-3xl text-white ml-2 mr-8">Nextjs13</span>
              </div>
              <div className="flex relative w-full justify-center">
                <SiTypescript className="text-white h-10 w-10" />
                <span className="text-3xl text-white ml-2 mr-8">
                  Typescript
                </span>
              </div>
              <div className="flex relative w-full justify-center">
                <SiMongodb className="text-white h-10 w-10" />
                <span className="text-3xl text-white ml-2 mr-8">MongoDB</span>
              </div>
              <div className="flex relative w-full justify-center">
                <SiPrisma className="text-white h-10 w-10" />
                <span className="text-3xl text-white ml-2 mr-8">Prisma</span>
              </div>
            </div>
          </div>
          <Image
            src={penguins}
            alt="Picture of the author"
            height={650}
            width={650}
            className="mx-4 hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
