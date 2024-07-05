import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { colors } from '../../../utils/colors';
import { CarDetailsCardData,Rows, TableRowData } from '../../../utils/RegisteredCarData';
import CustomButton from '../../common/CustomButton';
import CustomTableTwo from '../../common/CustomTableTwo';

import CarDetailCard from './CarDetailCard';

const RegisteredCar = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={3}>

      {/* Title */}
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h4' fontWeight={600} color={colors.textEightColor}>Registered Vehicles</Typography>
        <NavLink to='/driver/cars/add-car'>
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
        </NavLink>
      </Box>

      {/* Car Registered Table */}
      <Box>
        <CustomTableTwo tableRowData={TableRowData} rows={Rows} />
      </Box>

      <Box>
        <Typography variant='h4' fontWeight={600} color={colors.btnBgColor} mb={1}>Details</Typography>

        {/* Card */}
        <Box display={'flex'} flexDirection={'column'} gap={5}>
          {CarDetailsCardData.map((item, index) => (
            <CarDetailCard key={item.carName} carName={item.carName} Content={item.content} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default RegisteredCar;
