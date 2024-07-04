import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { colors } from '../../utils/colors';

const CustomButton = ({ btnName, width, mt, onClick, height, gap, marginRight, paddingRight, borderRadius, fontSize, fontWeight, icon }) => {
    return (
        <Box textAlign={'center'} mt={mt}>
            <Button
                type="submit"
                variant="contained"
                onClick={onClick}
                sx={{
                    textTransform: 'none',
                    backgroundColor: `${colors.btnBgColor}`,
                    color: `${colors.btnColor}`,
                    borderRadius: borderRadius || '12px',
                    height: height || '42px',
                    width: width || '92%',
                    gap: gap,
                    marginRight: marginRight,
                    paddingRight: paddingRight,
                    fontSize: fontSize || '16px',
                    fontWeight: fontWeight || '600',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: `${colors.btnBgColor}`,
                        boxShadow: 'none',
                    }
                }}
            >
                {icon && (<AddOutlinedIcon sx={{ fontSize: '1.1rem' }} />)}
                {btnName}
            </Button>
        </Box>
    )
}

export default CustomButton
