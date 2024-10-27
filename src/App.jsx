export default function App() {
  return (
    <>
      {/* Equivale a la clase container de Bootstrap */}
      {/* <div className="px-4 mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]"> */}
      <div className="px-4 mx-auto md:w-[750px] lg:w-[970px]">
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-5xl font-extrabold font-lobster text-center my-14">
            SnapShot
          </h1>

          {/* Navbar */}
          <nav className="w-full md:w-[460px] flex flex-col items-center justify-center">
            {/* Search input */}
            <form className="w-full mb-8">
              <div className="relative flex h-10">
                <input type="text" id="search-input"
                  className="bg-gray-200/50 border-[3px] border-gray-300/80 text-gray-900 rounded-lg w-full h-full px-4 py-2 focus:outline-none"
                  placeholder="Search..."
                />

                <button type="submit"
                  className="flex items-center justify-center px-3 text-white rounded-e-md absolute right-0 h-full w-1/6 bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Buttons */}
            <div className="w-full md:h-10 flex items-center justify-center">
              <ul className="w-full md:h-full grid grid-rows-4 md:grid-cols-4 gap-3">
                <li className="w-full">
                  <button className="w-full md:py-1 bg-black text-white text-center rounded-md">
                    Mountain
                  </button>
                </li>

                <li className="w-full">
                  <button className="w-full md:py-1 bg-black text-white text-center rounded-md">
                    Beaches
                  </button>
                </li>

                <li className="w-full">
                  <button className="w-full md:py-1 bg-black text-white text-center rounded-md">
                    Birds
                  </button>
                </li>

                <li className="w-full">
                  <button className="w-full md:py-1 bg-black text-white text-center rounded-md">
                    Food
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          {/* End of Navbar */}
        </header>

        {/* ------------ Cards ----------- */}
        {/* Contenedor para el título y las imágenes */}
        <main>
          <h2 className="text-center text-3xl font-extrabold text-slate-800 capitalize mb-10">
            Mountain pictures
          </h2>

          {/* Solo imágenes */}
          <ul className="flex flex-wrap justify-center xs-personalizado:justify-between">
            <li className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
              <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src="https://picsum.photos/200/300?random=2" alt="Imagen" />
            </li>

            <li className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
              <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src="https://picsum.photos/200/300?random=1" alt="Imagen" />
            </li>

            <li className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
              <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src="https://picsum.photos/200/300?random=3" alt="Imagen" />
            </li>

            <li className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
              <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src="https://picsum.photos/200/300?random=4" alt="Imagen" />
            </li>

            <li className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
              <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src="https://picsum.photos/200/300?random=5" alt="Imagen" />
            </li>
          </ul>
          {/* Fin de Solo imágenes */}
        </main>
      </div>
    </>
  )
}