import React from 'react';
import {
    FaAlignLeft,
    FaChevronDown,
    FaSearch,
    FaServer,
    FaSortAlphaDown

} from 'react-icons/fa';

const Header = () => {
    return (
        <div className="w-full mt-10  text-xxs sm:text-xs  md:text-sm lg:text-md xl:text-md 2xl:text-lg 3xl:text-lg ">
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold ml-2 mr-5 ">Places</h1>
                <div className="flex justify-between self-end">
                    <div className="border flex flex-row border-gray-100 rounded shadow items-center gap-3 px-1 lg:px-2 py-1 lg:py-2">
                        <FaSearch className="w-5 h-5" />
                        <p className="mr-10 ">Search</p>
                    </div>

                    <div className="border flex flex-row border-gray-100 rounded shadow px-1 lg:px-2   py-1 lg:py-2">
                        <FaSortAlphaDown className='w-5 h-5'></FaSortAlphaDown>
                        <p className="p-1">Filters</p>
                    </div>

                    <div className="border  border-gray-100 rounded shadow   px-1 lg:px-2  py-1 lg:py-2">
                        <FaSortAlphaDown className='w-5 h-5'></FaSortAlphaDown>
                    </div>

                    <div className="flex flex-row ">
                        <div className="border border-gray-100 rounded shadow px-1 lg:px-2  py-1 lg:py-2 ">
                            <FaAlignLeft className='w-5 h-5'></FaAlignLeft>
                        </div>
                        <div className="border border-gray-100 rounded shadow px-1 lg:px-2  py-1 lg:py-2">
                            <FaServer className='w-5 h-5'></FaServer>
                        </div>
                    </div>

                    <button className="border bg-btnColor text-white   ml-1 px-1 rounded-lg whitespace-nowrap">
                        Add Places</button>
                   

                </div>
            </div>
        </div>
    );
};

export default Header;