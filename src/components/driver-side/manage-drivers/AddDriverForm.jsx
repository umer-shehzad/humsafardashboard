import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import UploadImage from '../../common/UploadImage';
import CustomButton from '../../common/CustomButton';
import { colors } from '../../../utils/colors';
import { Link } from 'react-router-dom';
import { genderOptions } from '../../../utils/manageDriverData';
import CustomSelectField from '../../common/CustomSelectField';

const UserDriverForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <Box
      component={Paper}
      elevation={0}
      borderRadius={0}
      width={'73%'}
      borderBottom={0}
      borderTop={0}
      borderLeft={4}
      borderRight={4}
      borderColor={'rgba(0,0,0,0.08)'}
      position={'absolute'}
      pt={5}
      pl={3}
      ml={3}
    >
      <Formik
        initialValues={{
          driverName: '',
          email: '',
          gender: selectedValue,
          age: '',
          licenseNo: '',
        }}
        onSubmit={(values) => {
          console.log('Add Driver Data', values);
        }}
      >
        {({ values }) => (
          <Form>
            <Box display={'flex'} flexDirection={'column'} rowGap={1.75}>
              <InputField
                type={'text'}
                labelName="Driver's Name"
                fieldName="driverName"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />
              <InputField
                type={'email'}
                labelName="Email Address"
                fieldName="email"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />
              <CustomSelectField
                labelName={'Gender'}
                fieldName={'gender'}
                options={genderOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                setSelectedValue={setSelectedValue}
              />
              <InputField
                type={'number'}
                labelName="Age"
                fieldName="age"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />
              <InputField
                type={'text'}
                labelName="License No."
                fieldName="licenseNo"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />

              <UploadImage labelName={'Registration Card'} captionName={'(Front and Back)'} captionColor={colors.textninthColor} height={'20vh'} width={'48%'} textFontSize={16} textFontWeight={'bold'} mb={2} borderRadius={'10px'} selectImgWidth={'25%'} />
              <UploadImage labelName={'License'} captionName={'(Front and Back)'} captionColor={colors.textninthColor} height={'20vh'} width={'48%'} textFontSize={16} textFontWeight={'bold'} mb={2} borderRadius={'10px'} selectImgWidth={'25%'} />

              <Grid container mt={2} mb={5} gap={5}>
                <Grid item xs={2.5}>
                  <CustomButton btnName={'Save'} width={'100%'} fontWeight={500} borderRadius={'5px'} />
                </Grid>
                <Grid item xs={2.5}>
                  <Link to={'/driver/manage-drivers'}>
                    <CustomButton btnName={'Cancel'} changeColor={true} width={'100%'} fontWeight={500} borderRadius={'5px'} />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserDriverForm;
