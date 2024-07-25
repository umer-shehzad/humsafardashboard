import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../../utils/colors';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomButton from '../../common/CustomButton';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";

const EditTodoModal = ({ onClose, todoTitle, todoData }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(todoData);
  }, [])

  // Function to handle the deletion of todo items
  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={'center'}
      justifyContent={'center'}
      width="50%"
      pt={2}
      px={4}
      bgcolor={colors.todoModalBgColor}
      borderRadius="8px"
    >
      <Box display="flex" justifyContent="flex-end" alignItems={'center'} width="100%">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Form */}
      <Box width={'100%'}>
        <Formik
          initialValues={{
            listItem: '',
          }}
          onSubmit={(values, { resetForm }) => {
            console.log('Edit Todo', values);
            // resetForm(); 
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Box display={'flex'} flexDirection={'column'} width={'100%'}>
                <Box>
                  <Typography fontSize={16} fontWeight={'600'} color={colors.textEightColor}>
                    {todoTitle}
                  </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                  <Box pb={0.5} width={'85%'}>
                    <InputField
                      type={'text'}
                      fieldName="listItem"
                      placeholder={'Add your new Todo'}
                      borderRadiusRightTop={0}
                      borderRadiusRightBottom={0}
                      height={'42px'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                    />
                  </Box>
                  <Box>
                    <CustomButton
                      icon={true}
                      type={'button'}
                      iconFontSize={'2rem'}
                      borderRadiusLeftTop={0}
                      borderRadiusLeftBottom={0}
                      height={'42px'}
                      borderRadius={'5px'}
                      onClick={() => {
                        if (values.listItem) {
                          setTodoList([...todoList, { id: Date.now(), value: values.listItem }]);
                          setFieldValue('listItem', '');
                        }
                      }}
                    />
                  </Box>
                </Box>

                {/* Show Todo List Item */}
                <Box width={'100%'}>
                  {todoList.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mr={3} height={'35px'}>
                      <Typography fontSize={16} color={colors.textEightColor}>
                        {item.value}
                      </Typography>
                      <Box>
                        <IconButton>
                          <CiEdit size={20} color={colors.textFifthColor} />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(index)}>
                          <MdDeleteOutline size={20} color={colors.textFifthColor} />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box my={5}>
                  <CustomButton btnName={'Save'} width={'30%'} fontWeight={500} borderRadius={'5px'} />
                </Box>

              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default EditTodoModal;
