import React from 'react'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'


const Nav = () => {
  return (
    <div>
  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      <span className="cursor-pointer ml-3 mb-2 text-3xl text-violet-600 hover:scale-105 duration-200 font-bold font-sing">Inverno</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="cursor-pointer mr-10 font-semibold hover:text-violet-500 text-md">Home</a>
      <a className="cursor-pointer mr-10 font-semibold hover:text-violet-500 text-md">Shop</a>
      <a className="cursor-pointer mr-10 font-semibold hover:text-violet-500 text-md">About</a>
      <a className="cursor-pointer mr-10 font-semibold hover:text-violet-500 text-md">Contact</a>
    </nav>
    <div className="cursor-pointer m-2 p-2 hover:text-red-700">
        <FaHeart size={18}/>
    </div>
    <div className="cursor-pointer m-2 p-2 hover:text-blue-700">
        <FaShoppingCart size={18}/>
    </div>
  </div>
</div>
  )
}

export default Nav
