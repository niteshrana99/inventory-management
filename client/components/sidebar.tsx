import {  Menu } from 'lucide-react';
import SidebarLink from './SidebarLink';
import { useToggleSidebar } from '@/hooks/useToggleSideBar';
import Image from 'next/image';


const Sidebar = () => {
  const { isSideBarCollapsed, toggleSidebar, sideBarMenuConfig } =
    useToggleSidebar();

  const sidebarClassNames = `fixed flex flex-col bor ${
    isSideBarCollapsed ? 'w-0 md:w-16' : 'wd-72 md:w-64'
  } bg-white transition-all duration-300 h-full shadow-md z-40 md:visible`;

  return (
    <div className={sidebarClassNames}>
      <div className='flex gap-3 justify-between pt-5 items-center md:justify-center overflow-hidden'>
      <Image
          src="https://s3-inventory-management-images.s3.ap-south-1.amazonaws.com/logo.png"
          alt="logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
        <h1
          className={`${
            isSideBarCollapsed ? 'hidden' : 'block'
          } font-extrabold text-2xl text-gray-900 overflow-hidden`}
        >
          STOCKUP
        </h1>
        <button
          className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='h-4 w-4' />
        </button>
      </div>
      <div className='flex-grow mt-8'>
        {sideBarMenuConfig.map((item, index) => (
          <SidebarLink
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isCollapsed={isSideBarCollapsed}
          />
        ))}
      </div>

      <div>
        <p
          className={`text-sm text-center text-gray-500 ${
            isSideBarCollapsed ? 'hidden' : 'block'
          }`}
        >
          &copy; 2024 STOCKUP
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
