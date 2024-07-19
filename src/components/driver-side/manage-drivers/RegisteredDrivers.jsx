import React from 'react';

import { Box, Typography } from '@mui/material';

import { colors } from '../../../utils/colors';
import { Rows } from '../../../utils/manageDriverData';
import { TableRowData } from '../../../utils/manageDriverData';
import CustomButton from '../../common/CustomButton';
import CustomTableTwo from '../../common/CustomTableTwo';
import { Link } from 'react-router-dom';

const RegisteredDrivers = () => {
  return (
    <Box mt={3}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h6' color={colors.textFifthColor}>List of Registered Drivers</Typography>
        <Link to={'/driver/manage-drivers/add-driver'}>
          <CustomButton
            btnName={'Add New'}
            width={'100%'}
            gap={'12px'}
            paddingRight={'24px'}
            marginRight={'10px'}
            borderRadius={'6px'}
            fontWeight={500}
            icon={true}
          />
        </Link>
      </Box>
      <Box mt={2}>
        <CustomTableTwo tableRowData={TableRowData} rows={Rows} />
      </Box>
    </Box>
  );
}

export default RegisteredDrivers;
