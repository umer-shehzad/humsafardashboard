import React from 'react'
import FormHeadingPaper from '../../components/common/FormHeadingPaper'
import AddScheduleForm from '../../components/driver-side/schedule/AddScheduleForm'

const AddSchedulePage = () => {
  return (
    <>
    <FormHeadingPaper title={'Create New Schedule'} imgPath={'/driver/clock.svg'} height={50} alignItems={'center'} />
    <AddScheduleForm />
    </>
  )
}

export default AddSchedulePage