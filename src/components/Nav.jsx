import React from 'react'

const Nav = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 justify-center py-0 md:py-12 shadow-lg">
        <div className="flex-none w-20 md:w-3/5">
            <a className="btn btn-ghost text-xl">YGODEX</a>
        </div>
        <div className="flex-none gap-2 mx-8">
            {/* <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div> */}
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                <input type="text" className="grow" placeholder="Search" />
            </label>
        </div>
    </div>
  )
}

export default Nav