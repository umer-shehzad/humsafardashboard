import React from 'react';
import FormHeadingPaper from '../../components/common/FormHeadingPaper';
import AssignDriverForm from '../../components/driver-side/car/AssignDriverFrom';

const AssignDriverPage = () => {
  return (
    <>
      <FormHeadingPaper title={'Assign Driver'} imgPath={'/driver/add-person.svg'} height={55} alignItems={'end'} />
      <AssignDriverForm/>
    </>
  );
}

export default AssignDriverPage;
