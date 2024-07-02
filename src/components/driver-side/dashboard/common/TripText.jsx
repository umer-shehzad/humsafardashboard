import React from 'react'
import { Box, Typography } from '@mui/material'
import { colors } from '../../../../utils/colors'

const TripText = ({ text, value }) => {
  return (
    <>
      <Box display={'flex'} columnGap={3}>
        <Typography variant='caption' color={colors.textSeventhColor} fontWeight={600}>{text}</Typography>
        <Typography variant='caption' color={colors.textSeventhColor}>{value}</Typography>
      </Box>
    </>
  )
}

export default TripText