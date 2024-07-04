import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../../utils/colors';
import CustomButton from '../../common/CustomButton';
import CustomTableTwo from '../../common/CustomTableTwo';
import { Rows } from '../../../utils/manageDriverData';
import { TableRowData } from '../../../utils/manageDriverData';

const RegisteredDrivers = () => {
    return (
        <Box mt={3}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant='h6' color={colors.textFifthColor}>List of Registered Drivers</Typography>
                <CustomButton btnName={'Add New'} width={'100%'} borderRadius={'6px'} />
            </Box>
            <Box mt={3}>
                <CustomTableTwo tableRowData={TableRowData} rows={Rows} />
            </Box>
        </Box>
    );
}

export default RegisteredDrivers;
