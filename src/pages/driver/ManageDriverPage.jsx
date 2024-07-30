import React, { useState } from 'react'

import { Box, Grid, Modal, Typography } from '@mui/material'

import CustomButton from '../../components/common/CustomButton'
import CustomTodoCard from '../../components/common/CustomTodoCard'
import DetailBox from '../../components/common/DetailBox'
import RegisteredDrivers from '../../components/driver-side/manage-drivers/RegisteredDrivers'
import Title from '../../components/driver-side/manage-drivers/Title'
import { colors } from '../../utils/colors'
import { todoList } from '../../utils/todoData'
import AddTodoModal from '../../components/driver-side/schedule/AddTodoModal'
import EditTodoModal from '../../components/driver-side/schedule/EditTodoModal'

const ManageDriverPage = () => {
  const [modalType, setModalType] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  
  const handleOpenAddTodo = () => {
    setModalType('add');
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleOpenEditTodo = (todo) => {
    setSelectedTodo(todo);
    setModalType('edit');
    setOpen(true);
  };

  return (
    <>
      <Title name={'Manage Drivers'} />
      <RegisteredDrivers />
      <Title name={'Car Maintenance'} />

      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} flexDirection={'column'} gap={2} mt={2} width={'45%'}>
          <DetailBox
            height={'20vh'}
            heading={'1. Mehran VXL'}
            text1={'Registration No.'}
            text1Val={'38939y3y3'}
            text2={'Chasis No.'}
            text2Val={'12-Sep-2022'}
            text3={'Engine No.'}
            text3Val={'LHR - KSR'}
          />
          <DetailBox
            height={'20vh'}
            heading={'2. Mehran VXL'}
            text1={'Registration No.'}
            text1Val={'38939y3y3'}
            text2={'Chasis No.'}
            text2Val={'12-Sep-2022'}
            text3={'Engine No.'}
            text3Val={'LHR - KSR'}
          />
        </Box>

        {/* <Box width={'45%'}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='body1'>To Do:</Typography>
            <CustomButton
              btnName={'Add New'}
              width={'95%'}
              fontSize={'12px'}
              gap={'6px'}
              marginRight={'10px'}
              height={'32px'}
              borderRadius={'6px'}
              fontWeight={500}
              icon={true}
              onClick={handleOpenAddTodo} // Open modal on click
            />
          </Box>

          
          {todoList.map((todo, index) => (
              <CustomTodoCard
                key={todo.id}
                bgcolor={colors[`todoColor${index + 1}`]}
                headingPL={4}
                headingPR={2}
                boxGap={1}
                listPL={9.5}
                todoList={todo.data}
                title={todo.title}
                onClick={() => handleOpenEditTodo(todo)}
                doneBtnColor={colors.doneBtnColor}
                iconColor={colors.textFifthColor}
              />
            ))}

            
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                {
                  modalType === 'add'
                    ? <AddTodoModal onClose={handleClose} />
                    : (
                      <EditTodoModal
                        onClose={handleClose}
                        todoTitle={selectedTodo?.title}
                        todoData={selectedTodo?.data}
                      />
                    )
                }
              </Box>
            </Modal>
        </Box> */}
      </Box>
    </>
  )
}

export default ManageDriverPage