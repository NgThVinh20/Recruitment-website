import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUserTie } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="contain">
          <h1 className="font-[700] text-[28px] text-white mb-[30px] text-center">
            887 Việc làm IT cho Developer "Chất"
          </h1>
          <form
            action=""
            className="flex gap-x-[15px] gap-y-[12px] mb-[30px] md:flex-nowrap flex-wrap"
          >
            <select className="md:w-[240px] w-[100%] h-[56px] rounded-[4px] px-[20px] font-[500] text-[16px] text-[#121212] bg-white">
              <option value="">Tất cả</option>
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
              <option value="">Hồ Chí Minh</option>
            </select>
            <input
              type="text"
              className="flex-1 h-[56px] rounded-[4px] px-[20px] font-[500] text-[16px] text-[#121212] bg-white"
              placeholder="Nhập từ khoá..."
            />
            <button className="md:w-[240px] w-[100%] h-[56px] bg-primary rounded-[4px] text-white font-[500] text-[16px] flex items-center justify-center">
              <FaMagnifyingGlass className = "text-[20px] mr-[5px]"/> Tìm Kiếm
            </button>
          </form>
          <div className="flex gap-x-[12px] gap-y-[15px] items-center flex-wrap">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <Link
                href=""
                className="rounded-[20px] bg-[#121212] hover:bg-[#414042] border-[1px] border-[#414042] py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-[#FFFFFF] inline-block"
              >
                ReactJS
              </Link>
              <Link
                href=""
                className="rounded-[20px] bg-[#121212] hover:bg-[#414042] border-[1px] border-[#414042] py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-[#FFFFFF] inline-block"
              >
                Javascript
              </Link>
              <Link
                href=""
                className="rounded-[20px] bg-[#121212] hover:bg-[#414042] border-[1px] border-[#414042] py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-[#FFFFFF] inline-block"
              >
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 1 */}
    
      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[30px] text-center">
            Nhà tuyển dụng hàng đầu
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            <div className="rounded-[8px] border-[1px] border-[#DEDEDE] card-item relative overflow-hidden flex flex-col">
              <img
                src="/assets/images/card-bg.png"
                alt=""
                className="absolute top-0 left-0 w-[100%]"
              />
              <div className="sm:pt-[32px] pt-[20px] sm:pb-[24px] pb-[16px] sm:px-[16px] px-[8px] relative flex-1">
                <div className="sm:w-[160px] w-[125px] aspect-[1/1] rounded-[8px] bg-white sm:mb-[24px] mb-[16px] p-[10px] inner-image mx-auto">
                  <Link href="#">
                    <img
                      src="/assets/images/demo-cong-ty-1.png"
                      alt=""
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </Link>
                </div>
                <h3 className="font-[700] sm:text-[18px] text-[14px] text-center line-clamp-2">
                  <Link href="#" className="text-[#121212]">
                    LG Electronics Development Vietnam (LGEDV)
                  </Link>
                </h3>
              </div>
              <div className="bg-[#F7F7F7] py-[12px] sm:px-[16px] px-[6px] flex sm:justify-between justify-center items-center sm:flex-nowrap flex-wrap gap-[12px]">
                <div className="font-[400] text-[14px] text-[#414042]">
                  Ho Chi Minh
                </div>
                <div className="font-[400] text-[14px] text-[#121212] flex items-center ">
                  <FaUserTie className=" mr-[3px] text-[16px] text-[#000096]"/> 5 Việc làm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  );
}
