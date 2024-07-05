import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../utils/colors'

const FormHeadingPaper = ({ title, imgPath }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'end'}
      component={Paper}
      borderRadius={0}
      width={'105%'}
      elevation={10}
      pl={9}
      py={1}
      mb={7}
      gap={3}
      sx={{
        position: 'relative',
        zIndex: 1,
        right: 23,
        boxShadow: '1px 5px 5px -2px rgba(0,0,0,0.4)',
      }}
    >
      <Box
        component="img"
        height={55}
        alt="Add Person"
        src={imgPath}
      />
      <Typography variant='h4' fontWeight={600} color={colors.textEightColor}>{title}</Typography>
    </Box>
  )
}

export default FormHeadingPaper