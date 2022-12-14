import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-2 md:mb-8 lg:mb-16 '>
            <a href="/" className='lg:text-3xl text-xl font-bold text-[ #262064] no-underline'>PGWars</a>
            <div className='flex justify-between items-center gap-3'>
                <a href="/" className='sm:py-2 sm:px-5 text-xs font-medium flex  p-1 justify-between items-center no-underline '>Manage Property</a>
                <a href="/" className='sm:py-2 sm:px-5 text-xs font-medium flex  p-1 justify-between items-center no-underline '>Blog</a>
                <a href="/" className='bg-[#7065F0] hover:bg-[#342e77]  rounded-lg text-white p-2 no-underline' >Log in</a>
            </div>
        </div>
    );
};

export default Navbar;