import { Box, ListItemIcon } from '@mui/material'
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const CustomIcon = ({ iconName, color, size }) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'edit':
        return <CiEdit color="white" size={size} sx={{ border: '2px solid red' }} />;
      case 'delete':
        return <MdDeleteOutline color="white" size={size} />;
      default:
        return null;
    }
  };

  return (
    <ListItemIcon
      component={'button'}
      // width={25}
      // height={25}
      sx={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // border: 'none',
        minWidth: '14px',
        padding: '2px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: color
      }}
    >
      {/* <CiEdit color={'white'} size={'1rem'} /> */}
      {/* {iconName} */}
      {renderIcon()}
    </ListItemIcon>
  )
}

export default CustomIcon