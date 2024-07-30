import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomImage from '../../common/CustomImage'
import { colors } from '../../../utils/colors'
import CustomButton from '../../common/CustomButton'

const ImageSection = ({ userName, subTitle, profilePic }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} marginRight={20} marginLeft={4} alignItems={'center'}>
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <CustomImage src={profilePic} alt={'avatar'} height={'12vh'} />

        <Box>
          <Typography color={colors.textEightColor} fontSize={24} textAlign={'center'} height={33} fontWeight={'600'}>
            {userName}
          </Typography>
          <Typography color={colors.textSixthColor} fontSize={14} textAlign={'center'} ml={0.5}>
            {subTitle}
          </Typography>
        </Box>
      </Box>
      <Box>
        <CustomButton btnName={'Edit'} width={'300%'} borderRadius={'8px'}/>
      </Box>
    </Box>
  )
}

export default ImageSection