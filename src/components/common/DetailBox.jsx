import React from 'react'
import { Box, Typography } from '@mui/material'

import DetailBoxText from './DetailBoxText'

import { colors } from '../../utils/colors'

const DetailBox = ({ width, height, heading, text1, text1Val, text2, text2Val, text3, text3Val }) => {
  return (
    <>
      <Box height={height} width={width} borderRadius={2} border={1} borderColor={colors.btnBgColor}>
        <Box bgcolor={colors.btnBgColor} height={'7vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          sx={{
            borderRadius: '6px 6px 0 0',
          }}
        >
          <Typography color={'white'} variant='h5' fontWeight={700}>{heading}</Typography>
        </Box>
        <Box pl={3} pt={1.5}>
          <DetailBoxText text={text1} value={text1Val} />
          <DetailBoxText text={text2} value={text2Val} />
          <DetailBoxText text={text3} value={text3Val} />
        </Box>
      </Box>
    </>
  )
}

export default DetailBox