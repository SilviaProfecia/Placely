import React from 'react';
import Checkbox from './../Checkbox';

const TableHeader = ({ headings }) => {
    return (
        <thead className="bg-gray-100">
            <tr>
                {headings &&
                    headings.map((head) => (
                        
                        <th className={`p-1  border-b-2  border-gray-100 font-bold ${head==""?'ml-8':null}`}>
                            {/* {
                                head=="" ? <Checkbox isChecked={false}></Checkbox>:{head}
                            } */}
                            {head}
                            </th>
                    ))}
            </tr>
        </thead>
    );
};

export default TableHeader;