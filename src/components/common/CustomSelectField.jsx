import React from 'react';
import { Field } from 'formik';

import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const CustomSelectField = ({
    fieldName,
    labelName,
    options,
    textFontSize,
    textFontWeight,
    mb,
    borderRadius,
    width,
    height

}) => {
    return (
        <Box>
            <Field name={fieldName}>
                {({ field, form }) => (
                    <FormControl fullWidth>
                        <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>{labelName}</Typography>
                        <Select
                            labelId={`${fieldName}-label`}
                            id={fieldName}
                            {...field}
                            // label={labelName}
                            onChange={(event) => {
                                form.setFieldValue(fieldName, event.target.value);
                            }}
                            sx={{ borderRadius: borderRadius, width: width, height: height }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </Field>
        </Box>
    );
};

export default CustomSelectField;
