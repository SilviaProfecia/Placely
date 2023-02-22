import React from 'react';

const TableSetup = (props) => {
  
    return (
        <div className="w-full mt-10 mb-2 overflow-x-auto">
            <table className="w-full text-xxs sm:text-xs  md:text-sm lg:text-md xl:text-md 2xl:text-lg 3xl:text-lg   text-left " >
                {props.children}
            </table>
        </div>
    );
};

export default TableSetup;