import React from 'react'
import { Box, Typography, TextField  } from '@mui/material';
import { Field } from 'formik';

const InputField = ({ labelName, fieldName, height}) => {
    return (
        <Box>
            <Typography fontSize={14} fontWeight={400} mb={0.5}>{labelName}</Typography>
            <Field
                name={fieldName}
                as={TextField}
                variant="outlined"
                fullWidth
                // error={touched.userName && !!errors.userName}
                // helperText={touched.userName && errors.userName}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: height || '42px',
                        borderRadius: '12px'
                    }
                }}
            />
        </Box>
    )
}

export default InputField
