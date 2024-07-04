import { Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../utils/colors'

const Title = ({name}) => {
  return (
    <Typography variant='h4' component={'div'} color={colors.textEightColor} fontWeight={600} >
      {name}
    </Typography>
  )
}

export default Title