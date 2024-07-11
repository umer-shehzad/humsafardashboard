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
    placeholderColor
}) => {
    return (
        <Box>
            {/* <Typography fontSize={14} fontWeight={400} mb={0.5}>{labelName}</Typography> */}
            <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>{labelName}</Typography>
            <Field
                name={fieldName}
                as={TextField}
                variant="outlined"
                placeholder={placeholder}
                fullWidth
                // error={touched.userName && !!errors.userName}
                // helperText={touched.userName && errors.userName}
                InputProps={{
                    sx: {
                        '& .MuiInputBase-input::placeholder': {
                            fontSize: '14px',
                            color: placeholderColor
                        },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: height,
                        width: width,
                        borderRadius: borderRadius,
                        // height: height || '42px',
                        // borderRadius: '12px'
                    }
                }}
            />
        </Box>
    )
}

export default InputField
