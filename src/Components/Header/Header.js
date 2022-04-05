import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-8'>
            <Link className='mr-4' to='/home'>HOME</Link>
            <Link className='mr-4' to='/reviews'>REVIEWS</Link>
            <Link className='mr-4' to='/dashboard'>DASHBOARD</Link>
        </div>
    );
};

export default Header;