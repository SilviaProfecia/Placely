import React from 'react';
import TableHeader from './ReusableComponents/Table/TableHeader';
import TableContent from './ReusableComponents/Table/TableContent';
import CreateTable from './ReusableComponents/Table/TableSetup';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { useState } from 'react';
import { rows, headings, links } from './fakeData';


const PlacementTable = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const listPerPage = 10;
    const [pagesVisited, setPagesVisited] = useState(0)
    const initialShowingPagesArr = () => {
        const pagesArr = []
        for (let i = 0; i < pageCount && i < 4; i++) {
            pagesArr.push(i + 1)
        }
        console.log(pagesArr, 'pages arr', pageCount)
        if (pageCount > 4) {
            pagesArr.push("...")
        }
        return pagesArr
    }

    const pageCount = Math.ceil(rows.length / listPerPage);
    const [showingPagesArr, setShowingPagesArr] = useState(initialShowingPagesArr());
    const maxPageIndex = 5;

    const changePage = (page) => {
        if(page>0 && page<=pageCount){
            let remainingSpace = maxPageIndex;
            let startIndex = 1;
            let endIndex = maxPageIndex - 1;
            let pagesArr = [];
           
            if (page + 3 > pageCount) {
                pagesArr = [];
                pagesArr.push("...");
                remainingSpace = maxPageIndex - 1
                startIndex = pageCount - 3;
                endIndex = pageCount - 1;
            }else if (page > 3) {
                pagesArr.push("...")
                remainingSpace = maxPageIndex - 1;
                startIndex = page - 1;
                endIndex = page + 1;
            }
            for (let i = startIndex; i <= endIndex && remainingSpace > 0; i++) {
                pagesArr.push(i)
                remainingSpace -= 1
            }
            if (remainingSpace == 1) {
                if (endIndex + 1 == pageCount) {
                    pagesArr.push(endIndex + 1);
                } else {
                    pagesArr.push("...")
                }
            }
            setShowingPagesArr(pagesArr);
            setPageNumber(page);
            setPagesVisited((page - 1) * listPerPage)
        }
    };
    return (
        <div className="h-screen flex overflow-auto">
                <Sidebar links={links}></Sidebar>
            <div className=" flex flex-col w-full">
                <Header />
                <CreateTable>
                    <TableHeader headings={headings} key={1} ></TableHeader>
                    <TableContent rows={rows} key={2} pagesVisited={pagesVisited} listPerPage={listPerPage} ></TableContent>
                </CreateTable>
                <div className="self-end mt-30 text-xxs sm:text-xs  md:text-sm lg:text-md xl:text-md 2xl:text-lg 3xl:text-lg  ml-10">
                    <div className="flex flex-row justify-end content-end text-center">
                        <div className="mt-16  p-1 lg:p-3">
                            Showing {pageNumber} of {pageCount}
                        </div>
                        <div className="border border-green-100 bg-btnColor text-white shadow flex flex-row rounded mt-16 p-1 md:p-1 xl:p-3">
                            <div className="" onClick={() => changePage(pageNumber - 1)}>
                                <span className="p-1 md:p-1 lg:p-3">Prev</span>
                            </div>
                            {
                                showingPagesArr && showingPagesArr.map(page => {
                                    return <div onClick={() => changePage(page)}> <span className="p-1 xl:p-2">{page}</span></div>
                                })
                            }
                            <div className="" onClick={() => changePage(pageNumber + 1)}>
                                <span className="p-1 md:p-1 lg:p-3">Next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementTable