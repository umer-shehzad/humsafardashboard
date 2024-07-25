import React from 'react'

import { Box } from '@mui/material'

const CustomImage = ({ src, alt, width, height, sx }) => {
  return (
    <>
      <Box
        component="img"
        alt={alt}
        src={src}
        width={width}
        height={height}
        sx={sx}
      />
    </>
  )
}

export default CustomImage