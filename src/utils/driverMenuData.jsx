import { AiFillCar } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";

import SmsIcon from '@mui/icons-material/Sms';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

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
        itemName: 'Chats',
        icon: <SmsIcon size={20}/>,
        path: '/driver/chats',
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