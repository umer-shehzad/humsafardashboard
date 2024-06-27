import React from 'react';
import { Modal, } from '@mui/material';
import ConfirmationModalContent from '../../components/signup/ConfirmationModalContent';

export default function Confirmation() {
    const [open, setOpen] = React.useState(true);
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ConfirmationModalContent handleClose={handleClose} />
            </Modal>
        </>
    );
}
