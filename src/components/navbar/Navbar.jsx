import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="sticky top-4 z-40 mx-3 flex  flex-row flex-wrap items-center justify-between rounded-lg bg-black/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
    <div className="ml-[18px]">
      <div className="h-6 w-fit pt-1 mb-1">
        <Link key={1} to={`/dashboard`}
          className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        >
          Dashboard
        </Link>
        <span className=" hover:no-underline  mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
            {" "}
            /{" "}
          </span>
        
        <Link
          className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
          to="#"
        >
          {props.name}
        </Link>
      </div>
      <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
        <Link
          to="#"
          className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
        >
          {props.name}
        </Link>
      </p>
    </div>
  </nav>  )
}

export default Navbar