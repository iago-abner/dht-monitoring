import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-800 text-gray-200">
      <head></head>
      <body>
        {/* <header className="absolute top-0 left-0 right-0 z-20 backdrop-blur-xl bg-white/20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-between items-center">
              <span
                className={`hidden  md:flex text-lg md:text-lg leading-tight text-blue-900 font-bold`}
              >
                Iago_Abner
              </span>
              <div className="flex justify-between items-center">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav className="hidden md:flex items-center my-4">
                <NavLink
                  href="/"
                  className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300"
                >
                  Home
                </NavLink>
                <NavLink
                  href="/home"
                  className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300"
                >
                  Realtime
                </NavLink>
                <NavLink
                  href="/dashboard"
                  className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300"
                >
                  Dashboard
                </NavLink>
              </nav>
            </div>
          </nav>
        </header> */}

        <main>{children}</main>
      </body>
    </html>
  );
}
