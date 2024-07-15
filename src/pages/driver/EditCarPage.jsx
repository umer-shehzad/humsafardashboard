import React from 'react'
import FormHeadingPaper from '../../components/common/FormHeadingPaper'
import EditCarForm from '../../components/driver-side/car/EditCarForm'

const EditCarPage = () => {
  return (
    <>
      <FormHeadingPaper title={'Edit Vehicle'} imgPath={'/driver/edit.png'} height={40} alignItems={'start'} />
      <EditCarForm />
    </>
  )
}

export default EditCarPage