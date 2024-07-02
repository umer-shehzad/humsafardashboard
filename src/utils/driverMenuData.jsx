import { RiDashboard2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";

export const MenuData = [
    {
        itemName: 'Dashboard',
        // itemIcon: '/icons/dashboard.svg',
        icon: <RiDashboard2Fill />,
        path: '/driver/dashboard',
    },
    {
        itemName: 'Cars',
        // itemIcon: '/icons/car.svg',
        icon: <AiFillCar />,
        path: '/driver/cars',
    },
    {
        itemName: 'Trips',
        // itemIcon: '/icons/trip.svg',
        icon: <AiFillCar />,
        path: '/driver/trips',
    },
    {
        itemName: 'Revenue',
        // itemIcon: '/icons/revenue.svg',
        icon: <AiFillCar />,
        path: '/driver/revenue',
    },
    {
        itemName: 'Manage Drivers',
        // itemIcon: '/icons/person.svg',
        icon: <IoMdPerson />,
        path: '/driver/manage-drivers',
    },
    {
        itemName: 'Schedule',
        // itemIcon: '/icons/schedule.svg',
        icon: <MdOutlineSchedule />,
        path: '/driver/schedule',
    },
    {
        itemName: 'Profile Settings',
        // itemIcon: '/icons/profile.svg',
        icon: <AiFillCar />,
        path: '/driver/profile-setting',
    }
];