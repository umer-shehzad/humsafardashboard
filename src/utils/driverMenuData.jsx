import { RiDashboard2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { GrMapLocation } from "react-icons/gr";
import { BiDollarCircle } from "react-icons/bi";

export const MenuData = [
    {
        itemName: 'Dashboard',
        icon: <RiDashboard2Fill size={20}/>,
        path: '/driver/dashboard',
    },
    {
        itemName: 'Cars',
        icon: <AiFillCar size={20}/>,
        path: '/driver/cars',
    },
    {
        itemName: 'Trips',
        icon: <GrMapLocation size={20}/>,
        path: '/driver/trips',
    },
    {
        itemName: 'Revenue',
        icon: <BiDollarCircle size={20}/>,
        path: '/driver/revenue',
    },
    {
        itemName: 'Manage Drivers',
        icon: <IoMdPerson size={20}/>,
        path: '/driver/manage-drivers',
    },
    {
        itemName: 'Schedule',
        icon: <MdOutlineSchedule size={20}/>,
        path: '/driver/schedule',
    },
    {
        itemName: 'Profile Settings',
        icon: <ManageAccountsOutlinedIcon size={20}/>,
        path: '/driver/profile-setting',
    }
];