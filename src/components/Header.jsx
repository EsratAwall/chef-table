import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4'>
           {/* logo */}
           <h1 className='text-gray-800 font-bold text-3xl'>Chef's Table</h1>
           {/* manu start */}
           <ul className='flex gap-6 text-gray-600 font-semibold text-base'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Recipes</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Search</a>
            </li>
           </ul>
           {/* menu end */}
           <div className='flex flex-row justify-between items-center gap-4'>
          {/* search */}
          <div className='flex justify-between items-center relative'>
         <input
         className='py-4 px-10 bg-gray-100 rounded-full placeholder-gray-100 outline-none'
         type="text" 
         placeholder='Search'
         />
         <div className='absolute inset-y-0 -left-1 pl-4 flex items-center text-2xl'>
         <i className="fa-solid fa-magnifying-glass"></i>
         <h6 className='font-bold text-base text-gray-500'>Search</h6>
         </div>
         <div className='bg-green-400 flex items-center justify-center rounded-full w-12 h-12'>
          <i className='fa-regular fa-user-circle text-3xl'></i>
         </div>
          </div>
           </div>
        </div>
    );
};

export default Header;