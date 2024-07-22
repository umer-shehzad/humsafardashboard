import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../../utils/colors';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomButton from '../../common/CustomButton';
import { MdDeleteOutline } from 'react-icons/md';

const AddTodoModal = ({ onClose }) => {
  const [todoList, setTodoList] = useState([]);

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
      <Box display="flex" justifyContent="space-between" alignItems={'center'} width="100%">
        <Typography fontSize={16} fontWeight={'600'} color={colors.textEightColor}>
          Add New
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Form */}
      <Box width={'100%'}>
        <Formik
          initialValues={{
            headingName: '',
            listItem: '',
          }}
          onSubmit={(values, { resetForm }) => {
            console.log('Add New Todo', values);
            // resetForm(); 
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Box display={'flex'} flexDirection={'column'} rowGap={1.75} width={'100%'}>
                <Box>
                  <Typography fontSize={16} fontWeight={'600'} color={colors.textEightColor}>
                    List Name
                  </Typography>
                  <InputField
                    type={'text'}
                    fieldName="headingName"
                    placeholder={'i.e. car maintenance'}
                    height={'42px'}
                    width={'95%'}
                    textFontSize={16}
                    textFontWeight={'bold'}
                    mb={0.5}
                    borderRadius={'5px'}
                  />
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
                          setTodoList([...todoList, values.listItem]);
                          setFieldValue('listItem', '');
                        }
                      }}
                    />
                  </Box>
                </Box>

                {/* Show Todo List Item */}
                <Box width={'100%'}>
                  {todoList.map((item, index) => (
                    <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mr={5} height={'35px'}>
                      <Typography fontSize={16} color={colors.textEightColor}>
                        {item}
                      </Typography>
                      <IconButton onClick={() => handleDelete(index)}>
                        <MdDeleteOutline size={20} color={colors.textFifthColor} />
                      </IconButton>
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

export default AddTodoModal;
