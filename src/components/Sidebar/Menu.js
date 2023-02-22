import { FaChevronDown } from 'react-icons/fa';
import React from 'react';
import SubMenu from './SubMenu';
import { useState } from 'react';
const Menu = ({ link, isSidebarLarge }) => {
    const { id, url, text, icon, subLinks } = link;
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const sidebarVisibilityHandler = (value) => {
        setIsSidebarVisible(value);
    }
    return (
        <>
            <a
                {...(url ? {} : { href: url })}
                key={id}
                onClick={() => sidebarVisibilityHandler(!isSidebarVisible)}
                className={` ${isSidebarLarge ? 'flex' : null} xl:ml-7  items-center mt-4 ${url == "" ? 'disabled' : null}'  ${id == 0 ? 'text-2xl' : '  '} `}>
                <div className="flex items-center">
                    {subLinks ? <FaChevronDown className="w-2 h-2  " /> : <span className="w-2 h-2 "></span>}
                    {icon}
                </div>
                <span className={`lg:mx-3 xl:mx-3 font-medium ${isSidebarLarge ? 'visible' : 'invisible'} `}>{text}</span>
            </a>
            {
                subLinks && isSidebarVisible && subLinks.map((subMenu, index) => { return <SubMenu link={subMenu} key={index} isSidebarLarge={isSidebarLarge} ></SubMenu> })
            }
            {
                link.text == "Messages" && <hr className="border-b mt-4 border-gray-100 " />
            }
        </>
    );
};

export default Menu;