import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { colors } from '../../../utils/colors';
import CustomButton from '../../common/CustomButton';
import CarDetailsCardContent from './CarDetailsCardContent';
import { Link, NavLink } from 'react-router-dom';

const CarDetailCard = ({ carData }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box border={1} borderColor={colors.cardBorderColor} borderRadius={'10px'}>
          {/* Card Heading */}
          <Box display={'flex'} justifyContent={'space-between'} py={1} px={1}>
            <Typography variant='h6' fontWeight={600} color={colors.textEightColor}>
              {carData?.make?.replace(/\b\w/g, char => char.toUpperCase())}
            </Typography>
            <Link
              to='/driver/cars/assign-driver'
              state={{ carValue: carData?.make }}
            >
              <CustomButton btnName={'Assign Driver'} width={'100%'} borderRadius={'6px'} fontWeight={500} />
            </Link>
          </Box>

          {/* Card Content */}
          <Box display={'flex'} flexDirection={'column'} rowGap={1.5} mb={2}>
            <CarDetailsCardContent
                text1={'Registraton No.'}
                text1Val={carData?.registrationNumber}
                text2={'Assigned Driver'}
                text2Val={'Ahmad Ali'}
              />
            <CarDetailsCardContent
                text1={'Chasis No.'}
                text1Val={carData?.chasisNumber}
                text2={'Fuel Tank Capacity'}
                text2Val={carData?.fuelTankCapacity}
              />
            <CarDetailsCardContent
                text1={'Seats'}
                text1Val={carData?.totalSeats}
                text2={'Engine No.'}
                text2Val={carData?.engineNumber}
              />
            <CarDetailsCardContent
                text1={'Facilities'}
                text1Val={carData?.facilities}
                text2={'Status'}
                text2Val={carData?.isActive}
                active={true}
              />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CarDetailCard;
