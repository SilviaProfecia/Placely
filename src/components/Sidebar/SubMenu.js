import React from 'react';

const SubMenu = ({ link, key, isSidebarLarge }) => {
    const { id, url, text, icon } = link;
    console.log(link, key, "#######")
    return (
        <a
            key={id}
            href={url}
            id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            // className={`capitalize flex items-center px-2 py-2 mt-1 text-black hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform rounded-md `}
            className={`${isSidebarLarge ? "flex" : ""} xl:ml-7 items-center mt-4`}>
            <div className="flex items-center">
                <span className="w-2 h-2 "></span>
                {icon}
            </div>
            <span className={` lg:mx-3 xl:mx-3 font-medium  ${isSidebarLarge ? "visible" : "invisible"}`}>
                {text}
            </span>
        </a>
    );
};

export default SubMenu;