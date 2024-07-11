import { Box, Grid } from '@mui/material'
import React from 'react'
import RevenueCard from '../../common/RevenueCard'
import { colors } from '../../../utils/colors'

const RevenueCardsBox = () => {
  return (
    <Box>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={3}>
          <RevenueCard
            height={'25vh'}
            border={1}
            borderColor={colors.revenueCardBorderColor}
            borderRadius={'10px'}
            text1={'Daily Avg. Income'}
            text2={'1.4k+'}
            text3={'18%'}
            bgColor={colors.sideBarBgColor}
            text1Color={colors.primaryColor}
            text2Color={colors.primaryColor}
            text3Color={colors.btnBgColor}
            arrowColor={colors.btnBgColor}
          />
        </Grid>
        <Grid item xs={3}>
          <RevenueCard
            height={'25vh'}
            border={1}
            borderColor={colors.revenueCardBorderColor}
            borderRadius={'10px'}
            text1={'Annual Profit'}
            text2={'1M+'}
            text3={'24%'}
            bgColor={colors.primaryColor}
            text1Color={colors.revenueTextColor}
            text2Color={colors.revenueTextColor}
            text3Color={colors.btnBgColor}
            arrowColor={colors.btnBgColor}
          />
        </Grid>
        <Grid item xs={3}>
          <RevenueCard
            height={'25vh'}
            border={1}
            borderColor={colors.revenueCardBorderColor}
            borderRadius={'10px'}
            text1={'Spent This month'}
            text2={'43+'}
            text3={'75%'}
            bgColor={colors.primaryColor}
            text1Color={colors.revenueTextColor}
            text2Color={colors.revenueTextColor}
            text3Color={colors.btnBgColor}
            arrowColor={colors.btnBgColor}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RevenueCardsBox