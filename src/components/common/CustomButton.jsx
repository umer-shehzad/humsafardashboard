import React from 'react';
import { Button, Box } from '@mui/material';

const CustomButton = ({ btnName, width }) => {
    return (
        <Box textAlign={'center'} mt={3}>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    textTransform: 'none',
                    backgroundColor: '#E58600',
                    color: 'white',
                    borderRadius: '8px',
                    height: '42px',
                    width: width || '80%'
                }}
            >
                {btnName}
            </Button>
        </Box>
    )
}

export default CustomButton
