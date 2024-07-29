import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton,Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '12px',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70vh',
    border: 'none',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const ConfirmationModalContent = ({ handleClose, title, titleColor, subTitleColor, email }) => {
    return (
        <>
            <Box sx={style}>
                {/* Close Icon */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Box display={'flex'} width={'90%'} columnGap={8}>
                    {/* Image */}
                    <Box
                        component="img"
                        height={'50vh'}
                        ml={3}
                        alt="ModalLogo"
                        src="/signup/modal-image.png"
                    />

                    {/* Content */}
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} rowGap={4}>
                        {/* Circle Check */}
                        <Box
                            component="img"
                            alt="Circle Check"
                            width={'30%'}
                            src="/signup/circle-check.svg"
                        />

                        <Box>
                            {/* Title */}
                            <Typography id="modal-title" fontSize={25} fontWeight={500} sx={{ color: `${titleColor}`, mt: 2 }}>
                                {title}
                            </Typography>

                            {/* Sub Title */}
                            <Typography id="modal-description" fontSize={22} fontWeight={500} sx={{ color: `${subTitleColor}`, mt: 0 }}>
                                {email}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ConfirmationModalContent
