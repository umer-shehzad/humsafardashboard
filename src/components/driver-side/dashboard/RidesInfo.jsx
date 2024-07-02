import { Box, Typography } from '@mui/material'
import React from 'react'
import TripBox from './common/TripBox'

import { colors } from '../../../utils/colors'

const RidesInfo = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} pr={2}>
      {/* One */}
      <Box bgcolor={colors.btnBgColor} height={'20vh'} width={'25%'} borderRadius={2} pl={2} pt={1} alignItems={'center'}>
        <Typography color={'white'} variant='h6'>Rides</Typography>
        <Typography color={'white'} variant='h4' fontWeight={700}>1697</Typography>
        <Box display={'flex'} alignItems={'center'} columnGap={1}>
          <Typography color={'white'} variant='subtitle2' fontWeight={500}>Monthly Avg.</Typography>
          <Typography color={'white'} variant='h4' fontWeight={700}>183</Typography>
        </Box>
      </Box>

      {/* Two */}
      <TripBox
        heading={'Last Trip'}
        text1={'Time:'}
        text1Val={'7:00AM - 8:00PM'}
        text2={'Date:'}
        text2Val={'12-Sep-2022'}
        text3={'From:'}
        text3Val={'LHR - KSR'}
      />

      {/* Three */}
      <TripBox
        heading={'Next Trip'}
        text1={'Time:'}
        text1Val={'11:00AM - 12:00PM'}
        text2={'Date:'}
        text2Val={'12-Dec-2022'}
        text3={'From:'}
        text3Val={'LHR - KSR'}
      />

    </Box>
  )
}

export default RidesInfo