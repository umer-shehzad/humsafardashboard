import { Box } from '@mui/material'
import React from 'react'
import Heading from '../profile-settings/Heading'
import ImageSection from '../profile-settings/ImageSection'
import UserDataForm from '../profile-settings/UserDataForm'

const ProfileSettingPage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Heading headingName={'Profile'} />
      <ImageSection userName={'Rafay'} subTitle={'Car Owner'} />
      <UserDataForm />
    </Box>
  )
}

export default ProfileSettingPage