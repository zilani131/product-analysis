import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='mt-8 text-blue-500 text-2xl font-bold flex justify-center'>
            <CustomLink className='mr-4 ' to='/home'>HOME</CustomLink>
            <CustomLink className='mr-4 ' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='mr-4 ' to='/dashboard'>DASHBOARD</CustomLink>
        </div>
    );
};

export default Header;