import Link from "next/link";
import { FaUserTie, FaBriefcase } from "react-icons/fa";

export default function CompanyJobListPage() {
  return (
    <div className="py-[60px]">
      <div className="contain">
        <div className="mb-[20px] flex items-center justify-between gap-[20px] flex-wrap">
          <h1 className="font-[700] text-[28px] text-[#121212]">
            Quản lý công việc
          </h1>

          <Link
            href="/company-manager/job/create"
            className="bg-primary rounded-[4px] px-[20px] py-[8px] font-[400] text-[14px] text-white"
          >
            Thêm mới
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
          <div className="rounded-[8px] border border-[#DEDEDE] card-item relative overflow-hidden">
            <img
              src="/assets/images/card-bg.png"
              alt="Card Background"
              className="absolute top-0 left-0 w-full"
            />

            <div className="py-[20px] px-[16px] relative">
              <h3 className="font-[700] text-[18px] text-center line-clamp-2 mb-[12px]">
                <Link
                  href="/company/jobs/1"
                  className="text-[#121212] hover:text-primary"
                >
                  Frontend Engineer (ReactJS)
                </Link>
              </h3>

              <div className="font-[600] text-[16px] text-primary mb-[6px] text-center">
                1.000$ - 1.500$
              </div>

              <div className="flex items-center justify-center font-[400] text-[14px] text-[#121212] mb-[6px]">
                <FaUserTie className="text-[16px] mr-[4px]" />
                Fresher
              </div>

              <div className="flex items-center justify-center font-[400] text-[14px] text-[#121212] mb-[12px]">
                <FaBriefcase className="text-[16px] mr-[4px]" />
                Tại văn phòng
              </div>

              <div className="flex items-center justify-center gap-[8px]">
                <span className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  ReactJS
                </span>

                <span className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                  NextJS
                </span>
              </div>

              <div className="flex items-center justify-center gap-[12px] mt-[20px]">
                <Link
                  href="/company/jobs/1/edit"
                  className="bg-[#FFB200] rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] text-black"
                >
                  Sửa
                </Link>

                <button
                  type="button"
                  className="bg-[#FF0000] rounded-[4px] py-[8px] px-[20px] font-[400] text-[14px] text-white"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <select className="border border-[#DEDEDE] rounded-[8px] h-[44px] px-[18px] font-[400] text-[16px] text-[#414042]">
            <option>Trang 1</option>
            <option>Trang 2</option>
            <option>Trang 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}