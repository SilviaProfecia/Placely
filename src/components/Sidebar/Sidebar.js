import React, { useState } from 'react';
import Menu from './Menu';
import {
    FaRegArrowAltCircleLeft,
    FaShapes, FaSortAlphaDown
} from 'react-icons/fa';

const Sidebar = ({ links }) => {
    const [isSidebarLarge, setIsSidebarLarge] = useState(false);
    const handlingSidebarSize = (value) => {
setIsSidebarLarge(value)
    }
    return (
        <div className={`${isSidebarLarge? "w-72":"w-14"} flex h-screen  flex-col bg-white  p-1 xl:p-2 border-r min-h-screen relative text-xs sm:text-sm  md:text-md lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-xl`}>
            <nav className="">
                {links.map((link, index) => {
                    return (<Menu link={link} key={index} isSidebarLarge={isSidebarLarge}></Menu>);
                })}
                <hr className="my-2" />
            </nav>
            <FaRegArrowAltCircleLeft className='w-6 h-5 absolute -right-3 top-3' onClick={() => handlingSidebarSize(!isSidebarLarge)}/>
        </div>
    );
};

export default Sidebar;