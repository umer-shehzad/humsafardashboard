import React from 'react';
import { Field } from 'formik';
import { Box, TextField, Typography } from '@mui/material';

const InputField = ({
  labelName,
  fieldName,
  height,
  width,
  placeholder,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius,
  placeholderColor,
  type,
  icon,
  disabled,
  borderRadiusRightTop,
  borderRadiusRightBottom,
  touched,
  errors,
}) => {
  return (
    <Box>
      {icon ? (
        <Box display={'flex'} gap={1}>
          <Box>{icon}</Box>
          <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>
            {labelName}
          </Typography>
        </Box>
      ) : (
        <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>
          {labelName}
        </Typography>
      )}
      <Field name={fieldName}>
        {({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            placeholder={placeholder}
            type={type}
            fullWidth
            disabled={disabled}
            error={touched[fieldName] && !!errors[fieldName]}
            helperText={touched[fieldName] && errors[fieldName]}
            InputProps={{
              sx: {
                '& .MuiInputBase-input::placeholder': {
                  fontSize: '14px',
                  color: placeholderColor,
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: height,
                width: width,
                borderRadius: borderRadius,
                borderTopRightRadius: borderRadiusRightTop,
                borderBottomRightRadius: borderRadiusRightBottom,
              },
            }}
          />
        )}
      </Field>
    </Box>
  );
};

export default InputField;
