import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '12px',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '50vh',
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

const ConfirmationModalContent = ({handleClose}) => {
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

                <Box display={'flex'} columnGap={6}>
                    {/* Image */}
                    <Box
                        component="img"
                        sx={{ width: '40%', }}
                        alt="ModalLogo"
                        pl={3}
                        src="/signup/modal-image.png"
                    />

                    {/* Content */}
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <CheckCircleOutlineIcon sx={{ fontSize: '4rem', color: 'green' }} />
                        <Typography id="modal-title" variant="h6" component="h2" sx={{ color: 'green', mt: 2 }}>
                            Account Successfully Created
                        </Typography>
                        <Typography id="modal-description" sx={{ color: 'green', mt: 1 }}>
                            We will contact you after approval
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ConfirmationModalContent
