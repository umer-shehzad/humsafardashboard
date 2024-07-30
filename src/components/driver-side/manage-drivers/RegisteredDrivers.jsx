import Reac, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { colors } from '../../../utils/colors';
import { DriverTableHeadings, Rows } from '../../../utils/manageDriverData';
import CustomButton from '../../common/CustomButton';
import CustomTableTwo from '../../common/CustomTableTwo';
import { Link } from 'react-router-dom';
import { fetchOwnerDriversThunk } from '../../../redux/thunks/fetchOwnerDriversThunk';

const RegisteredDrivers = () => {
  const dispatch = useDispatch();
  const { ownerDriversData } = useSelector((state) => state.ownerDrivers);

  useEffect(() => {
    try {
      dispatch(fetchOwnerDriversThunk());
    } catch (error) {
      console.error('Error while Fetching Owner Drivers:', error);
      if (error.message === 'Internal server error') {
        toast.error('Error while fetching Drivers!');
      }
    }
  }, [dispatch]);

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
        <CustomTableTwo tableRowData={DriverTableHeadings} rows={ownerDriversData} />
      </Box>
    </Box>
  );
}

export default RegisteredDrivers;
