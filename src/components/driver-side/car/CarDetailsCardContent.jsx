import { Grid, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../utils/colors'

const CarDetailsCardContent = ({ text1, text1Val, text2, text2Val }) => {
  return (
    <>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={6} pl={1}>
              <Typography color={colors.textFifthColor}>{text1}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color={colors.textFifthColor}>{text1Val}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={6} pl={8}>
              <Typography color={colors.textFifthColor}>{text2}</Typography>
            </Grid>
            <Grid item xs={6} pl={10}>
              <Typography color={colors.textFifthColor}>{text2Val}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CarDetailsCardContent