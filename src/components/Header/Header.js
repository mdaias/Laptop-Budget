import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (

        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to='/'>
                    Laptop Budget
                </Link>
            </div>
            <div className='flex gap-4 text-xl font-bold'>
                <CustomLink to='/home'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/deshboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </div>
        </div>

    );
};

export default Header;