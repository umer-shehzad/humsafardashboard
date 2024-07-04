import React from 'react'
import Title from '../../components/driver-side/manage-drivers/Title'
import RegisteredDrivers from '../../components/driver-side/manage-drivers/RegisteredDrivers'
import DetailBox from '../../components/common/DetailBox'

const ManageDriverPage = () => {
  return (
    <>
      <Title name={'Manage Drivers'}/>
      <RegisteredDrivers />
      <Title name={'Car Maintenance'}/>

      <DetailBox
        width={'45%'}
        height={'20vh'}
        heading={'1. Mehran VXL'}
        text1={'Registration No.'}
        text1Val={'38939y3y3'}
        text2={'Chasis No.'}
        text2Val={'12-Sep-2022'}
        text3={'Engine No.'}
        text3Val={'LHR - KSR'}
      />
    </>
  )
}

export default ManageDriverPage