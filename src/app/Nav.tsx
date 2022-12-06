import Image from "next/image";
import Link from "next/link";
import temp from "src/assets/images/iconsTemperature.png";

export function Nav() {
  return (
    <nav className="flex absolute w-full mt-2 px-3 py-5">
      <div className="container flex items-center justify-between mx-16">
        <a href="/" className="flex items-center">
          <Image
            src={temp}
            alt="Picture temp"
            height={55}
            width={55}
            className="mx-2 hidden md:block"
          />
        </a>
        <div className="hidden w-full md:block md:w-auto mr-8">
          <ul className="flex mt-4 rounded-lg bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:text-2xl md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 focus:text-white hover:opacity-90 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/temperature"
                className="block focus:text-white hover:opacity-90 py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Temperatura
              </Link>
            </li>
            <li>
              <Link
                href="/humidity"
                className="block focus:text-white hover:opacity-90 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Umidade
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
