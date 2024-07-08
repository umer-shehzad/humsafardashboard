import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import CustomSelectField from '../../common/CustomSelectField';
import { assignDriverOptions } from '../../../utils/RegisteredCarData';
import { colors } from '../../../utils/colors';
import { Link, useLocation } from 'react-router-dom';

const AssignDriverForm = () => {
  const { state } = useLocation();
  const carValue = state?.carValue || 'Default Car Name';

  return (
    <Box ml={5}>
      <Typography variant='h5' fontWeight={'bold'} mb={4}>{carValue}</Typography>
      {/* Form */}
      <Formik
        initialValues={{
          assignDriver: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              display={'flex'}
              flexDirection={'column'}
              rowGap={1.75}
            >
              <CustomSelectField
                fieldName={'driverName'}
                labelName={`Driver's Name`}
                placeholder={`Select a driver`}
                placeholderColor={colors.cardBorderColor}
                placeholderFontSize={'14px'}
                options={assignDriverOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />

              <Grid container mt={3}>
                <Grid item xs={1.5}>
                  <Link to={'/driver/cars'}>
                    <CustomButton btnName={'Assign'} width={'120%'} fontWeight={500} borderRadius={'5px'} />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default AssignDriverForm;
