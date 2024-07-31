import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, CircularProgress, Typography } from '@mui/material';

import { colors } from '../../../utils/colors';
import { VehicleTableHeadings } from '../../../utils/RegisteredCarData';
import CustomButton from '../../common/CustomButton';
import CustomTableTwo from '../../common/CustomTableTwo';

import CarDetailCard from './CarDetailCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnerVehiclesThunk } from '../../../redux/thunks/fetchOwnerVehiclesThunk';

const RegisteredCar = () => {
  const dispatch = useDispatch();
  const { ownerVehiclesData, loading } = useSelector((state) => state.ownerVehicles);

  useEffect(() => {
    try {
      dispatch(fetchOwnerVehiclesThunk());
    } catch (error) {
      console.error('Error while Fetching Owner vehicles:', error);
      if (error.message === 'Internal server error') {
        toast.error('Error while fetching Drivers!');
      }
    }
  }, [dispatch]);


  return (
    <Box display={'flex'} flexDirection={'column'} gap={3} justifyContent={loading ? 'center' : ''} alignItems={loading ? 'center' : ''}>
      {loading
        ? <CircularProgress />
        : <>
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
            <CustomTableTwo tableRowData={VehicleTableHeadings} rows={ownerVehiclesData} path={'/driver/cars/edit-car'} tableFor={'cars'} />
          </Box>

          <Box>
            <Typography variant='h4' fontWeight={600} color={colors.btnBgColor} mb={1}>Details</Typography>

            {/* Card */}
            <Box display={'flex'} flexDirection={'column'} gap={5}>
              {ownerVehiclesData.map((item) => (
                <CarDetailCard key={item.id} carData={item} />
              ))}
            </Box>
          </Box>
        </>
      }
    </Box>
  )
}

export default RegisteredCar;
