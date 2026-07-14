import Link from "next/link"
export default function HeaderAccount(){
  return (
    // <div className="font-[600] sm:text-[16px] text-[12px] text-white">
    //   <Link href="#" className="">
    //     Đăng Nhập
    //   </Link>
    //   <span className=""> / </span>
    //   <Link href="#" className="">
    //     Đăng Ký
    //   </Link>
    // </div>
    <div className="font-[600] sm:text-[16px] text-[12px] text-white relative group/sub-1">
      <Link href="#" className="">
        LG Elect...
      </Link>
      <ul className="bg-[#000065] rounded-[4px] absolute top-[100%] right-0 w-[200px] hidden group-hover/sub-1:block">
        <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
          <Link href="" className="font-[600] text-[16px] text-white">
            Thông tin công ty
          </Link>
        </li>
        <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
          <Link href="" className="font-[600] text-[16px] text-white">
            Quản lý công việc
          </Link>
        </li>
        <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
          <Link href="" className="font-[600] text-[16px] text-white">
            Quản lý CV
          </Link>
        </li>
        <li className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
          <Link href="" className="font-[600] text-[16px] text-white">
            Đăng xuất
          </Link>
        </li>
      </ul>
    </div>
  )
}