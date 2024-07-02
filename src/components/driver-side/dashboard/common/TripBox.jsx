import { Box, Typography } from '@mui/material'
import React from 'react'
import TripText from './TripText'
import { colors } from '../../../../utils/colors'

const TripBox = ({ heading, text1, text1Val, text2, text2Val, text3, text3Val }) => {
  return (
    <>
      <Box height={'20vh'} width={'25%'} borderRadius={2} border={1} borderColor={colors.btnBgColor}>
        <Box bgcolor={colors.btnBgColor} height={'7vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          sx={{
            borderRadius: '6px 6px 0 0',
          }}
        >
          <Typography color={'white'} variant='h5' fontWeight={700}>{heading}</Typography>
        </Box>
        <Box pl={3} pt={1.5}>
          <TripText text={text1} value={text1Val} />
          <TripText text={text2} value={text2Val} />
          <TripText text={text3} value={text3Val} />
        </Box>
      </Box>
    </>
  )
}

export default TripBox