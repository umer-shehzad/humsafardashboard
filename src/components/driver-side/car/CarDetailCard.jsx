import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { colors } from '../../../utils/colors';
import CustomButton from '../../common/CustomButton';
import CarDetailsCardContent from './CarDetailsCardContent';
import { Link, NavLink } from 'react-router-dom';

const CarDetailCard = ({ carName, Content }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box border={1} borderColor={colors.cardBorderColor} borderRadius={'10px'}>
          {/* Card Heading */}
          <Box display={'flex'} justifyContent={'space-between'} py={1} px={1}>
            <Typography variant='h6' fontWeight={600} color={colors.textEightColor}>{carName}</Typography>
            <Link
              to='/driver/cars/assign-driver'
              state={{ carValue: carName }}
            >
              <CustomButton btnName={'Assign Driver'} width={'100%'} borderRadius={'6px'} fontWeight={500} />
            </Link>
          </Box>

          {/* Card Content */}
          <Box display={'flex'} flexDirection={'column'} rowGap={1.5} mb={2}>
            {Content.map((item, index) => (
              <CarDetailsCardContent
                key={item.val1}
                text1={item.text1}
                text1Val={item.val1}
                text2={item.text2}
                text2Val={item.val2}
              />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CarDetailCard;
