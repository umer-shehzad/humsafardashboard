import React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Typography } from '@mui/material';

import { colors } from '../../utils/colors';

const CustomButton = ({
    btnName,
    type,
    width,
    mt,
    changeColor,
    onClick,
    height,
    gap,
    marginRight,
    paddingRight,
    borderRadius,
    fontSize,
    fontWeight,
    icon,
    iconFontSize,
    borderRadiusLeftTop,
    borderRadiusLeftBottom
}) => {
    return (
        <Box textAlign={'center'} mt={mt}>
            <Button
                type= {type || "submit"}
                variant="contained"
                onClick={onClick}
                sx={{
                    textTransform: 'none',
                    backgroundColor: changeColor ? colors.editIconBgColor : colors.btnBgColor,
                    color: colors.btnColor,
                    borderRadius: borderRadius || '12px',
                    borderTopLeftRadius: borderRadiusLeftTop,
                    borderBottomLeftRadius: borderRadiusLeftBottom,
                    height: height || '42px',
                    width: width || '92%',
                    gap: gap,
                    marginRight: marginRight,
                    paddingRight: paddingRight,
                    fontSize: fontSize || '16px',
                    fontWeight: fontWeight || '600',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: changeColor ? colors.editIconBgColor : colors.btnBgColor,
                        boxShadow: 'none',
                    }
                }}
            >
                {icon && (<AddOutlinedIcon sx={{ fontSize: iconFontSize || '1.1rem' }} />)}
                {btnName}
            </Button>
        </Box>
    )
}

export default CustomButton
