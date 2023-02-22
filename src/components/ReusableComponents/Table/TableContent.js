import React from 'react';
import Checkbox from '../Checkbox';

const TableContent = ({ rows, pagesVisited, listPerPage }) => {
    return (
        <tbody>
            {
                rows && rows.slice(pagesVisited, pagesVisited + listPerPage).map(data => (
                    <tr className="bg-white border-b border-gray-100 font-semibold mt-2">
                        <td className="pl-2 md:pl-7 p-2 ms-2 "><Checkbox isChecked={true}></Checkbox></td>
                        <td className="p-1  ">{data.placeId}</td>
                        <td className="p-1  ">{data.placeName}</td>
                        <td className="p-1 ">{data.placeAddress}</td>
                        <td className=" md:p-1 lg:p-1 xl:p-1  "><button className="whitespace-nowrap  p-1 border border-gray-100 rounded-lg shadow">
                        {data.placeType} </button></td>
                        <td className="p-1 "><button className="p-1  whitespace-nowrap border border-cyanColor rounded-lg shadow text-cyanColor  ">{data.status}</button></td>
                    </tr>
                ))
            }
        </tbody>
    );
};
export default TableContent;