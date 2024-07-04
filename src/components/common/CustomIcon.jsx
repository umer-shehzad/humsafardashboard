import { Box } from '@mui/material'
import React from 'react'

const CustomIcon = ({iconName, color}) => {
  return (
    <Box
      component={'button'}
      width={25}
      height={25}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: color
      }}
    >
      {/* <CiEdit color={'white'} size={'1rem'} /> */}
      {iconName}
    </Box>
  )
}

export default CustomIcon