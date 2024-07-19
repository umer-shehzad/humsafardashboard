import React from 'react'
import FormHeadingPaper from '../../components/common/FormHeadingPaper'
import AddDriverForm from '../../components/driver-side/manage-drivers/AddDriverForm'

const AddDriverPage = () => {
  return (
    <>
    <FormHeadingPaper title={'Add Driver'} imgPath={'/driver/add-person.svg'} height={55} alignItems={'end'} />
    <AddDriverForm />
    </>
  )
}

export default AddDriverPage