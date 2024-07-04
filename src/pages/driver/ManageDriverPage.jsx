import React from 'react'
import Title from '../../components/driver-side/manage-drivers/Title'
import RegisteredDrivers from '../../components/driver-side/manage-drivers/RegisteredDrivers'
import DetailBox from '../../components/common/DetailBox'
import { Box, Grid, Typography } from '@mui/material'
import CustomButton from '../../components/common/CustomButton'
import CustomTodoCard from '../../components/common/CustomTodoCard'

const ManageDriverPage = () => {
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

        <Box width={'45%'}>
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
            />
          </Box>

          {/* todo card */}
          <CustomTodoCard />
        </Box>
      </Box>
    </>
  )
}

export default ManageDriverPage