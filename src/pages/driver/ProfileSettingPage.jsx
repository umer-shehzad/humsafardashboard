import { Box } from '@mui/material'
import React from 'react'
import Heading from '../../components/driver-side/profile-settings/Heading'
import ImageSection from '../../components/driver-side/profile-settings/ImageSection'
import UserDataForm from '../../components/driver-side/profile-settings/UserDataForm'

const ProfileSettingPage = () => {
  const loginData = JSON.parse(localStorage.getItem('login-data'));
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Heading headingName={'Profile'} />
      <ImageSection userName={loginData.name} profilePic={loginData.profilePic} subTitle={'Car Owner'} />
      <UserDataForm />
    </Box>
  )
}

export default ProfileSettingPage