import React from 'react'

import { Grid, Typography } from '@mui/material'

import { colors } from '../../../utils/colors'

const CarDetailsCardContent = ({ text1, text1Val, text2, text2Val, active, }) => {
  return (
    <>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={6} pl={1}>
              <Typography color={colors.textFifthColor}>{text1}</Typography>
            </Grid>
            <Grid item xs={6}>
              {Array.isArray(text1Val)
                ? <Typography color={colors.textFifthColor}>
                  {text1Val.map(facility => facility.charAt(0).toUpperCase() + facility.slice(1)).join(', ')}
                </Typography>
                : <Typography color={colors.textFifthColor}>{text1Val}</Typography>
              }
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={6} pl={8}>
              <Typography color={colors.textFifthColor}>{text2}</Typography>
            </Grid>
            <Grid item xs={6} pl={5}>
              {active
                ? <Typography color={text2Val === true ? colors.textTertiaryColor : colors.textFifthColor}>
                  {text2Val === true
                    ? 'Active'
                    : 'InActive'
                  }
                </Typography>
                : <Typography>
                  {text2Val}
                </Typography>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CarDetailsCardContent