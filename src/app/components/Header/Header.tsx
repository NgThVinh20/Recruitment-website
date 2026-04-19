"use client"
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { HeaderMenu } from './HeaderMenu'
import { useState } from 'react'
export const Header = () => {
    const [showMenu,setShowMenu ] = useState(false)
    const handleShowMenu = () =>{
      setShowMenu(!showMenu)
    }
    console.log(showMenu)
  return (
    <>
       <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex justify-between items-center">
            <Link href="" className="font-[800] sm:text-[28px] text-[20px] text-white lg:flex-none flex-1">
              28.ITJobs
            </Link>
            <HeaderMenu showMenu = {showMenu} />
            <div className="font-[600] sm:text-[16px] text-[12px] text-white">
              <Link href="#" className="">
                Đăng Nhập
              </Link>
              <span className=""> / </span>
              <Link href="#" className="">
                Đăng Ký
              </Link>
            </div>
            <button className="lg:hidden text-white text-[20px] ml-[12px]" 
              onClick={handleShowMenu}
              >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
      <div className={"fixed top-0 left-0 w-full h-full bg-[#00000076] " + (showMenu ? "block" : "hidden")}
      onClick={() => setShowMenu(false)}
      ></div>
    </>
  )
}