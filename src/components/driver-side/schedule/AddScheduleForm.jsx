import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { Box, Grid, Paper, Typography } from '@mui/material';

import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomSelectField from '../../common/CustomSelectField';
import { From, To } from '../../../utils/ResigteredScheduleData';
import CustomDatePicker from '../../common/CustomDatePicker';
import CustomTimePicker from '../../common/CustomTimePicker';
import { colors } from '../../../utils/colors';

const AddScheduleForm = () => {
  const [fromSelectedValue, setFormSelectedValue] = useState('');
  const [toSelectedValue, setToSelectedValue] = useState('');
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
      {/* form */}
      <Formik
        initialValues={{
          busNo: '',
          passengers: '',
        }}
        // validationSchema={SignupSchema}
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
              {/* Date & Times */}
              <Grid container justifyContent={'space-between'} width={'50%'}>
                <Grid item xs={12} mb={2}>
                  <CustomDatePicker
                    labelName={"Set Date"}
                    fieldName={"myDate"}
                    height={'42px'}
                    width={'100%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                    borderRadius={'12px'}
                  />
                </Grid>
                <Grid item xs={12} mb={2}>
                  <CustomTimePicker
                    labelName={"Set Starting Time"}
                    fieldName={"startTime"}
                    height={'42px'}
                    width={'100%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTimePicker
                    labelName={"Set Ending Time"}
                    fieldName={"endTime"}
                    height={'42px'}
                    width={'100%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                  />
                </Grid>
              </Grid>

              {/* From/To */}
              <Grid container justifyContent={'space-between'} width={'50%'}>
                <Grid item xs={5.5}>
                  <CustomSelectField
                    setSelectedValue={setFormSelectedValue}
                    fieldName={'from'}
                    labelName={'From'}
                    options={From}
                    height={'42px'}
                    width={'100%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                    borderRadius={'5px'}
                  />
                </Grid>
                <Grid item xs={5.5}>
                  <CustomSelectField
                    setSelectedValue={setToSelectedValue}
                    fieldName={'to'}
                    labelName={'To'}
                    options={To}
                    height={'42px'}
                    width={'100%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                    borderRadius={'5px'}
                  />
                </Grid>
              </Grid>

              <InputField
                labelName={"Bus No."}
                placeholder={'Enter Bus Plate No.'}
                placeholderColor={colors.cardBorderColor}
                fieldName="busNo"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />
              <InputField
                labelName={"No. of Passengers"}
                fieldName={"passengers"}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
              />

              <Box display={'flex'} justifyContent={'end'} width={'50%'} mb={7}>
                <NavLink to={'/driver/schedule'}>
                  <CustomButton
                    btnName={'Create Schedule'}
                    width={'100%'}
                    fontWeight={500}
                    borderRadius={'5px'}
                  />
                </NavLink>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default AddScheduleForm