import React, { useState } from 'react'

export default function Header(props) {
  let handleSearch = props.handleSearch;
  let setSearchTerm = props.setSearchTerm;

  const [isActiveSearchButton, setIsActiveSearchButton] = useState(false);

  function handleChange(e) {
    if (e.target.value.length === 0) {
      setIsActiveSearchButton(false);
    } else {
      setIsActiveSearchButton(true);
    }
  }

  return (
    <header className="flex flex-col items-center mb-10">
      <h1 className="text-5xl font-extrabold font-lobster text-center my-14">
        SnapShot
      </h1>

      {/* Navbar */}
      <nav className="w-full md:w-[460px] flex flex-col items-center justify-center">
        {/* Search input */}
        <form className="w-full mb-8" onSubmit={handleSearch}>
          <div className="relative flex h-10">
            <input type="text" id="search-input"
              name="searchInput"
              className="bg-gray-200/50 border-[3px] border-gray-300/80 text-gray-900 rounded-lg w-full h-full px-4 py-2 focus:outline-none"
              placeholder="Search..."
              onChange={handleChange}
            />

            <button type="submit"
              className={`flex items-center justify-center px-3 text-white rounded-e-md absolute right-0 h-full w-1/6 ${isActiveSearchButton ? 'bg-black' : ' bg-slate-100'}`}
              disabled={!isActiveSearchButton}
            >
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
              <button
                className="w-full md:py-1 bg-black text-white text-center rounded-md"
                onClick={() => setSearchTerm("mountain")}
              >
                Mountain
              </button>
            </li>

            <li className="w-full">
              <button
                className="w-full md:py-1 bg-black text-white text-center rounded-md"
                onClick={() => setSearchTerm("beaches")}
              >
                Beaches
              </button>
            </li>

            <li className="w-full">
              <button
                className="w-full md:py-1 bg-black text-white text-center rounded-md"
                onClick={() => setSearchTerm("birds")}
              >
                Birds
              </button>
            </li>

            <li className="w-full">
              <button
                className="w-full md:py-1 bg-black text-white text-center rounded-md"
                onClick={() => setSearchTerm("food")}
              >
                Food
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* End of Navbar */}
    </header>
  )
}
