import { Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../utils/colors'

const Heading = ({ headingName }) => {
  return (
    <Typography color={colors.textEightColor} fontSize={36} fontWeight={600} marginLeft={4}>{headingName}</Typography>
  )
}

export default Heading