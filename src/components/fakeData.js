import {
    FaUserFriends,
    FaShapes,
    FaDAndD,
    FaSearch,
    FaCompactDisc,
    FaQuinscape,
    FaNotEqual,
    FaGripHorizontal
} from 'react-icons/fa';
import { IoIosGift, IoIosGitCompare, IoIosHome, IoIosNotificationsOutline, IoIosPie, IoIosQrScanner, IoLogoBuffer, IoLogoDropbox, IoLogoFlickr, IoLogoPlaystation, IoLogoSlack, IoMdBarcode, IoMdBusiness, IoMdColorFill} from "react-icons/io";

export const headings = ["",
    "Place Id", "Place Name", "Address", "Place Type", "Status"
]
export const links = [
    {
        id: 0,
        url: "",
        text: "Placely",
        icon: <IoIosHome className=" text-btnColor w-7 h-7 p-1 " />
    },
    {
        id: 1,
        url: '/dashboard',
        text: 'Dashboard',

        icon: <FaGripHorizontal className="w-7 h-7 p-1" />,
    },
    {
        id: 2,
        url: '/notifications',
        text: 'Notifications',
        icon: <IoIosNotificationsOutline className="w-7 h-7 p-1" />,
    },
    {
        id: 3,
        url: '/messages',
        text: 'Messages',
        icon: <FaShapes className="w-7 h-7 p-1" />,
    },
    {
        id: 4,
        url: '/search',
        text: 'Search',
        icon: <FaSearch className="w-7 h-7 p-1" />,
    },
    {
        id: 5,
        url: '/home/home',
        text: 'Dexus',
        icon: <IoLogoBuffer className="w-7 h-7 p-1" />,
        subLinks: [{
            id: 51,
            url: '/places',
            text: 'Places',
            icon: <IoLogoFlickr className="w-7 h-7 p-1" />,
        },
        {
            id: 52,
            url: '/compliance',
            text: 'Compliance',
            icon: <IoLogoDropbox className="w-7 h-7 p-1" />,
        },
        {
            id: 53,
            url: '/assets',
            text: 'Assets',
            icon: <IoLogoSlack className="w-7 h-7 p-1" />,
        },
        {
            id: 54,
            url: '/inspections',
            text: 'Inspections',
            icon: <IoLogoPlaystation className="w-7 h-7 p-1" />,
        },
        {
            id: 55,
            url: '/workRequests',
            text: 'Work Requests',
            icon: <IoMdBarcode className="w-7 h-7 p-1" />,
        },
        {
            id: 56,
            url: '/workOrders',
            text: 'Work Orders',
            icon: <IoIosGitCompare className="w-7 h-7 p-1" />,
        },
        {
            id: 57,
            url: '/transactions',
            text: 'transactions',
            icon: <IoIosGift className="w-7 h-7 p-1" />,
        }]
    },

    {
        id: 6,
        url: '/petStock',
        text: 'Pet Stock',
        icon: <IoIosPie className="w-7 h-7 p-1" />,
    },
    {
        id: 7,
        url: '/sevana',
        text: 'Sevana',
        icon: <IoIosQrScanner className="w-7 h-7 p-1" />,
    },
    {
        id: 8,
        url: '/sewerSurgeon',
        text: 'sewerSurgeon',
        icon: <IoMdBusiness className="w-7 h-7 p-1" />,
    },
    {
        id: 9,
        url: '/schindler',
        text: 'Schindler',
        icon: <IoMdColorFill className="w-7 h-7 p-1" />,
    }
];


export const rows = [
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000001",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000002",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000003",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000004",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000005",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000006",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000007",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000008",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000009",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000010",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000011",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000012",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000013",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000014",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000015",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000016",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000017",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000018",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000019",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000020",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000021",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000022",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000023",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000024",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000025",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000026",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000027",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000028",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000029",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000030",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000031",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000032",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000033",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000034",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000035",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000036",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000037",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000038",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000039",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000040",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000041",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000042",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000043",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000044",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000045",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000046",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000047",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000048",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000049",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000050",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000051",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000052",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000053",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000054",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000055",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000056",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000057",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000058",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": true,
        "placeId": "AC100-PR0000000059",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
    {
        "selectBox": false,
        "placeId": "AC100-PR0000000060",
        "placeName": "Park Avenue Condominimus",
        "placeAddress": "432 Park Ave, New York, NY 10022",
        "placeType": "Residental Building",
        "status": "Operational"
    },
]
