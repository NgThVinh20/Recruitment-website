import Link from "next/link";

export default function CompanyJobCreatePage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
              <h1 className="sm:w-auto w-full font-[700] text-[20px] text-black">
                Thêm mới công việc
              </h1>

              <Link
                href="/company-manager/job/list"
                className="font-[400] text-[14px] text-[#0088FF] underline"
              >
                Quay lại danh sách
              </Link>
            </div>

            <form className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Tên công việc *
                </label>

                <input
                  id="title"
                  type="text"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="salaryMin"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mức lương tối thiểu ($)
                </label>

                <input
                  id="salaryMin"
                  type="number"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="salaryMax"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mức lương tối đa ($)
                </label>

                <input
                  id="salaryMax"
                  type="number"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Cấp bậc *
                </label>

                <select
                  id="position"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                >
                  <option>Intern</option>
                  <option>Fresher</option>
                  <option>Junior</option>
                  <option>Middle</option>
                  <option>Senior</option>
                  <option>Manager</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="workingForm"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Hình thức làm việc *
                </label>

                <select
                  id="workingForm"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                >
                  <option>Tại văn phòng</option>
                  <option>Làm từ xa</option>
                  <option>Linh hoạt</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="technologies"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Các công nghệ
                </label>

                <input
                  id="technologies"
                  type="text"
                  className="w-full h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="images"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Danh sách ảnh *
                </label>

                <input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block font-[500] text-[14px] text-black mb-[5px]"
                >
                  Mô tả chi tiết
                </label>

                <textarea
                  id="description"
                  className="w-full h-[350px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
                  defaultValue=""
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white"
                >
                  Tạo mới
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}