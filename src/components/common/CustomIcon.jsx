import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import { ListItemIcon } from '@mui/material'

const CustomIcon = ({ iconName, color, size, onClick }) => {
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
      sx={{
        minWidth: '14px',
        padding: '2px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: color
      }}
      onClick={onClick}
    >
      {renderIcon()}
    </ListItemIcon>
  )
}

export default CustomIcon