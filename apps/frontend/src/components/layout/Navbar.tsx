"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCalendarDay, FaCarAlt, FaFileInvoice, FaUserAlt, FaWrench } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
function Navbar() {
const pathName = usePathname()
  const navData = [
    {
      name:"dashboard",
      route:"/",
      icon:<RiDashboardFill />,
    },
     {
      name:"users",
      route:"/users",
      icon: <FaUserAlt/>
    },
    {
      name:"vehicles",
      route:"/vehicles",
      icon:<FaCarAlt/>
    },
    {
      name:"bookings",
      route:"/bookings",
      icon:<FaCalendarDay />
    },
    {
      name:"services",
      route:"/services",
      icon:<FaWrench />
    },
    {
      name:"invoices",
      route:"/invoices",
      icon:<FaFileInvoice />
    }
    ]
  return (
    <>
    <header className='py-5 min-w-[15%] max-w-[18%]'>
    <div className="capitalize text-2xl font-bold mb-5">Vehicle Service Centre</div>
    {navData.map((navItem,index)=>(
      <Link key={index} href={navItem.route} className={`capitalize `}>
      <span className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 ${pathName==navItem.route ? "bg-gray-700":""}`}>
        {navItem.icon}
        {navItem.name}
      </span></Link>
    ))}
    </header>
    </>
  )
}

export default Navbar