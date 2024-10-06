'use client';

import { useToggleSidebar } from '@/hooks/useToggleSideBar';
import { useAppDispatch, useAppSelector } from '@/providers/redux';
import { setIsDarkMode } from '@/state';
import { Bell, Menu, Search, Sun } from 'lucide-react';

export const Navbar = () => {

  const { toggleSidebar } = useToggleSidebar();
  const isDarkMode = useAppSelector(state => state.global.isDarkMode);
  const dispatch = useAppDispatch();
  // const toggleDarkMode = () => {
  //   dispatch(setIsDarkMode(!isDarkMode));
  // }

  return (
    <div className='flex justify-between items-center w-full mb-7 gap-5'>
      <div className='flex justify-between items-center gap-5'>
        <button
          className='px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
        <div className='relative'>
          <input
            type='search'
            placeholder='Start typing to search groups and products'
            className='pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none md:w-96 border-2 bg-white'
          />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <Search
              className='text-gray-400'
              size={20}
            />
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center gap-5'>
        <div>
          <div>
            {/* Todo */}
            {/* <button onClick={toggleDarkMode}>
              <Sun className='text-gray-600' />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
