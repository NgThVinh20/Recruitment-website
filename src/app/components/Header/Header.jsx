import Link from 'next/link'
import { FaAngleRight, FaAngleDown, FaBars } from 'react-icons/fa6'

export const Header = () => {
  return (
    <>
       <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex justify-between items-center">
            <Link href="" className="font-[800] sm:text-[28px] text-[20px] text-white lg:flex-none flex-1">
              28.ITJobs
            </Link>
            <nav className="lg:block hidden">
              <ul className="flex gap-x-[30px]">
                <li className="flex items-center gap-x-[8px] relative group/sub-1">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Việc Làm IT
                  </Link>
                  <FaAngleDown className="fa-solid text-[16px] text-white" />
                  <ul className="bg-[#000065] rounded-[4px] absolute top-[100%] left-0 w-[280px] hidden group-hover/sub-1:block">
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
                      <Link href="" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo kỹ năng
                      </Link>
                      <FaAngleRight className="fa-solid text-[16px] text-white" />
                      <ul className="bg-[#000065] rounded-[4px] absolute top-0 left-[100%] w-[280px] hidden group-hover/sub-2:block">
                        <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px]">
                          <Link href="" className="font-[600] text-[16px] text-white">
                            ReactJS
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px]">
                      <Link href="" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo công ty
                      </Link>
                      <FaAngleRight className="fa-solid text-[16px] text-white" />
                    </li>
                    <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px]">
                      <Link href="" className="font-[600] text-[16px] text-white">
                        Việc làm IT theo thành phố
                      </Link>
                      <FaAngleRight className="fa-solid text-[16px] text-white" />
                    </li>
                  </ul>
                </li>
                <li className="flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Top Công Ty IT
                  </Link>
                  <FaAngleDown className="fa-solid text-[16px] text-white" />
                </li>
                <li className="flex items-center gap-x-[8px]">
                  <Link href="#" className="font-[600] text-[16px] text-white">
                    Nhà Tuyển Dụng
                  </Link>
                  <FaAngleDown className="fa-solid text-[16px] text-white" />
                </li>
              </ul>
            </nav>
            <div className="font-[600] sm:text-[16px] text-[12px] text-white">
              <Link href="#" className="">
                Đăng Nhập
              </Link>
              <span className=""> / </span>
              <Link href="#" className="">
                Đăng Ký
              </Link>
            </div>
            <button className="lg:hidden text-white text-[20px] ml-[12px]">
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}