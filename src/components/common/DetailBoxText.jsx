import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import { colors } from '../../utils/colors'

const DetailBoxText = ({ text, value }) => {
  return (
    <>
      <Grid container height={20}>
        <Grid item xs={5} pl={6} pt={1}>
          <Typography variant='caption' color={colors.textSeventhColor} fontWeight={600}>{text}</Typography>
        </Grid>
        <Grid item xs={7} pt={1}>
          <Typography variant='caption' color={colors.textSeventhColor}>{value}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default DetailBoxText