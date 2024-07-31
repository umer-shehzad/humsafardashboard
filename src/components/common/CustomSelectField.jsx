import React from 'react';
import { Field } from 'formik';
import { Box, FormControl, MenuItem, Select, Typography, FormHelperText } from '@mui/material';

const CustomSelectField = ({
  fieldName,
  labelName,
  options,
  placeholder,
  placeholderColor,
  placeholderFontSize,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius,
  width,
  height,
  setSelectedValue,
  touched,
  errors,
  multipleValues,
}) => {
  return (
    <Box>
      <Field name={fieldName}>
        {({ field, form }) => {
          const isPlaceholder = field.value.length === 0;
          return (
            <FormControl
              fullWidth
              error={touched[fieldName] && Boolean(errors[fieldName])}
            >
              <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>
                {labelName}
              </Typography>
              <Select
                labelId={`${fieldName}-label`}
                id={fieldName}
                multiple={multipleValues}
                {...field}
                value={field.value || []}
                displayEmpty
                onChange={(event) => {
                  form.setFieldValue(fieldName, event.target.value);
                  setSelectedValue(event.target.value);
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span style={{ color: placeholderColor, fontSize: placeholderFontSize }}>{placeholder}</span>;
                  }
                  if (multipleValues){
                    return selected.map(val => options.find(option => option.value === val)?.label).join(', ');
                  } else {
                    return options.find(option => option.value === selected)?.label;
                  }
                }}
                sx={{
                  borderRadius: borderRadius,
                  width: width,
                  height: height,
                }}
              >
                <MenuItem
                  value=""
                  disabled
                >
                  {placeholder}
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {touched[fieldName] && Boolean(errors[fieldName]) && (
                <FormHelperText>{errors[fieldName]}</FormHelperText>
              )}
            </FormControl>
          );
        }}
      </Field>
    </Box>
  );
};

export default CustomSelectField;
