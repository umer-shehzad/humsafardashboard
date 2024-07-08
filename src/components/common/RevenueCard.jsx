import { Box, Typography } from '@mui/material'
import React from 'react'
import SouthIcon from '@mui/icons-material/South';

const RevenueCardsBox = ({
  height,
  border,
  borderColor,
  borderRadius,
  text1,
  text2,
  text3,
  bgColor,
  text1Color,
  text2Color,
  text3Color,
  arrowColor
}) => {
  return (
    <Box height={height} border={border} borderColor={borderColor} borderRadius={borderRadius} bgcolor={bgColor} pt={2} pl={2} display={'flex'} flexDirection={'column'} gap={4}>
      <Box display={'flex'} flexDirection={'column'} gap={0.5}>
        <Typography color={text1Color} variant='body1' fontWeight={'bold'}>{text1}</Typography>
        <Typography color={text2Color} variant='h5' fontWeight={'bold'}>{text2}</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'} mr={5} gap={0.5}>
        <SouthIcon sx={{ color: arrowColor, fontSize: '1rem' }} />
        <Typography color={text3Color} fontWeight={'bold'}>{text3}</Typography>
      </Box>
    </Box>
  )
}

export default RevenueCardsBox