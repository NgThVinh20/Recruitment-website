import Link from 'next/link'
import { FaAngleRight, FaAngleDown, FaBars } from 'react-icons/fa6'
export const HeaderMenu = (props : {
  showMenu : boolean
}) =>{
  const { showMenu } = props;


  const menuList = [
    {
      name: 'Việc Làm IT',
      link:"#",
      children: [
        {
          name: 'Việc làm IT theo kỹ năng',
          link:"#",
          children: [
            {
              name: 'ReactJS',
              link:"#",
            },
            {
              name: 'VueJS',
              link:"#",
            },
            {
              name: 'NodeJS',
              link:"#",
            },
            {
              name: 'PHP',
              link:"#",
            },
          ]
        },
        {
          name: 'Việc làm IT theo công ty',
          link:"#",
        },
        {
          name: 'Việc làm IT theo thành phố',
          link:"#",
        },
      ]
    },
    {
      name: 'Top Công Ty IT',
      link:"#",
      children: [
        {
          name: 'Top Công Ty ABC',
          link:"#",
        },
        {
          name: 'Top Công Ty XYZ',
          link:"#",
        },
        {
          name: 'Top Công Ty 123',
          link:"#",
        },
      ]
    },
    {
      name: 'Nhà Tuyển Dụng',
      link:"#",
      children: [
        {
          name: 'Đăng nhập',
          link:"#",
        },
        {
          name: 'Đăng ký',
          link:"#",
        },
      ]
    },
  ]
  return (
    <>
      <nav className={
        "lg:block " + (showMenu ? "fixed top-0 left-0 w-[280px] h-full bg-[#000065] z-10" : "hidden")
        }>
        <ul className="flex gap-x-[30px] flex-wrap">
          {menuList.map((item, index) => (
            <li 
              key ={index}
              className="flex items-center gap-x-[8px] relative group/sub-1 flex-wrap lg:p-0 p-[10px] lg:w-auto w-full">
              <Link href={item.link} className="font-[600] text-[16px] text-white lg:flex-none flex-1">{item.name}</Link>
               {item.children && (
                <FaAngleDown className="text-[16px] text-white" />
              )}
              {item.children && (
                <ul className="bg-[#000065] rounded-[4px] lg:absolute relative lg:top-[100%] top-0 left-0 lg:w-[280px] w-full hidden group-hover/sub-1:block">
                  {item.children.map((menuSub1, indexSub1)=>(
                    <li key ={indexSub1} className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px] group/sub-2">
                      <Link href={menuSub1.link} className="font-[600] text-[16px] text-white">
                        {menuSub1.name}
                      </Link>
                      {menuSub1.children && (
                          <FaAngleRight className="fa-solid text-[16px] text-white" />
                      )}
                      {menuSub1.children && (
                        <ul className="bg-[#000065] rounded-[4px] absolute top-0 left-[100%] w-[280px] hidden group-hover/sub-2:block">
                          {menuSub1.children.map((menuSub2, indexSub2)=>(
                            <li key={indexSub2} className="py-[10px] px-[16px] flex items-center justify-between hover:bg-[#000096] rounded-[4px]">
                              <Link href="" className="font-[600] text-[16px] text-white">
                                {menuSub2.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}   
        </ul>  
      </nav>
    </>
  )
}