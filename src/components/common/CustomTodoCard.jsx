import React from 'react';
import { CiEdit } from "react-icons/ci";

import { Box, Button, Checkbox, Typography } from '@mui/material';

const CustomTodoCard = ({
  bgcolor,
  headingPL,
  headingPR,
  boxGap,
  listPL,
  todoList,
  doneBtnColor,
  iconColor,
}) => {
  return (
    <Box
      bgcolor={bgcolor}
      mt={1}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={boxGap}
        py={4}
      >
        {/* Heading */}
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2} pr={headingPR} pl={headingPL}>
          <Box display={'flex'} gap={2}>
            <Box
              component={'img'}
              src={'/driver/maintenance.svg'}
            />
            <Typography variant="subtitle2" fontWeight={'bold'}>Car Maintenance</Typography>
          </Box>
          <Button
            variant="text"
            disableRipple
            disableFocusRipple
            sx={{
              textTransform: 'none',
              color: iconColor,
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <CiEdit size={20} />
          </Button>
        </Box>

        {/* todo list */}
        <Box pl={listPL}>
          <>
            {todoList.map((item) => (
              <Box key={item.id} display={'flex'} alignItems={'center'} gap={1}>
                <Checkbox
                  color="primary"
                  sx={{
                    padding: '0px',
                    '& .MuiSvgIcon-root': {
                      fontSize: '1rem',
                    },
                  }}
                />
                <Typography variant="subtitle2">{item.value}</Typography>
              </Box>
            ))}
            <Box textAlign={'right'} pr={headingPR}>
              <Button
                variant={'text'}
                disableRipple
                disableFocusRipple
                sx={{
                  textTransform: 'none',
                  color: doneBtnColor,
                  fontWeight: '500',
                  fontSize: 11,
                  padding: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Done
              </Button>
            </Box>
          </>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomTodoCard;
