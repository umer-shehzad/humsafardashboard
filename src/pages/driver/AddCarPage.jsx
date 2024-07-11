import React from 'react'

import AddCarForm from '../../components/driver-side/car/AddCarForm'
import FormHeadingPaper from '../../components/common/FormHeadingPaper'

const AddCarPage = () => {
  return (
    <>
    <FormHeadingPaper title={'Add Vehicle'} imgPath={'/driver/add-person.svg'} height={55} alignItems={'end'} />
    <AddCarForm />
    </>
  )
}

export default AddCarPage