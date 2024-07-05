import React from 'react'

import { Box } from '@mui/material'

const CustomImage = ({ src, alt, width, height }) => {
    return (
        <>
            <Box
                component="img"
                alt={alt}
                src={src}
                width={width}
                height={height}
            />
        </>
    )
}

export default CustomImage