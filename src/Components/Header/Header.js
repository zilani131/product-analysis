import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open,setOpen]=useState(true)
    return (
     
        <div>
            <div onClick={()=>setOpen(!open)} className='w-8 bg-slate-200 rounded-lg md:hidden '>
               {open?<MenuIcon></MenuIcon>:<XIcon></XIcon>}
            </div>
           <div className={`mt-3 md:mb-8 md:mt-0 py-4 bg-slate-100 text-blue-500 text-2xl font-bold flex flex-col ease-linear items-center 
           duration-200 sm:drop-shadow-2xl md:drop-shadow-sm border-2 md:flex-row  md:static  justify-center relative ${open?" top-[-200px]":"top-0"} `}>
            <CustomLink className='mr-4 ' to='/home'>HOME</CustomLink>
            <CustomLink className='mr-4 ' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='mr-4 ' to='/dashboard'>DASHBOARD</CustomLink>
        </div>
        </div>  

        
    );
};

export default Header;