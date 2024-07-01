import React from 'react';

import { Button, Box, Typography } from '@mui/material';

import { colors } from '../../utils/colors';

const CustomButton = ({ btnName, width, mt, onClick }) => {
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
                    borderRadius: '12px',
                    height: '42px',
                    width: width || '92%',
                    fontSize: '16px',
                    fontWeight: '600',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: `${colors.btnBgColor}`,
                        boxShadow: 'none',
                    }
                }}
            >
                {btnName}
            </Button>
        </Box>
    )
}

export default CustomButton
