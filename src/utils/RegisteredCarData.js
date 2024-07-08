export const TableRowData = {
  val1: 'Sr No.',
  val2: `Vehicle's Name`,
  val3: 'Registration No.',
  val4: 'Chasis No.',
  val5: 'Seats',
  val6: 'Action',
};


function createData(id, driverName, emailPhone, licenceNo, status) {
  return { id, driverName, emailPhone, licenceNo, status };
}

export const Rows = [
  createData('1', 'Toyota Corolla', '(+33)7 00 55 57 60', '34 LEJ 46', '3'),
  createData('2', 'Mehran', '+7 (809) 510-45-80', '34 LED 95', '25'),
  createData('3', 'WagonR', '+7 (809) 510-45-80', '34 LED 95', '25'),
];

export const CarDetailsCardData = [
  {
    carName: 'Toyota Corolla',
    content: [
      {
        text1: 'Registration No.',
        val1: '28838299ee49391',
        text2: 'Assigned Driver',
        val2: 'Ahmad Ali',
      },
      {
        text1: 'Chasis No.',
        val1: '385939de23',
        text2: 'Fuel Tank Capacity',
        val2: '40ML',
      },
      {
        text1: 'Seats',
        val1: '5',
        text2: 'Engine No.',
        val2: '284829fcdj',
      },
      {
        text1: 'Facilities',
        val1: 'Water bottle, Chips',
        text2: 'Status',
        val2: 'Active',
      },
    ]
  },
  {
    carName: 'Mehran',
    content: [
      {
        text1: 'Registration No.',
        val1: '28838299ee49392',
        text2: 'Assigned Driver',
        val2: 'Ahmad Ali',
      },
      {
        text1: 'Chasis No.',
        val1: '385939de23',
        text2: 'Fuel Tank Capacity',
        val2: '40ML',
      },
      {
        text1: 'Seats',
        val1: '5',
        text2: 'Engine No.',
        val2: '284829fcdj',
      },
      {
        text1: 'Facilities',
        val1: 'Water bottle, Chips',
        text2: 'Status',
        val2: 'Active',
      },
    ]
  },
  {
    carName: 'WangonR',
    content: [
      {
        text1: 'Registration No.',
        val1: '28838299ee49339',
        text2: 'Assigned Driver',
        val2: 'Ahmad Ali',
      },
      {
        text1: 'Chasis No.',
        val1: '385939de23',
        text2: 'Fuel Tank Capacity',
        val2: '40ML',
      },
      {
        text1: 'Seats',
        val1: '5',
        text2: 'Engine No.',
        val2: '284829fcdj',
      },
      {
        text1: 'Facilities',
        val1: 'Water bottle, Chips',
        text2: 'Status',
        val2: 'Active',
      },
    ]
  }
];

export const vehicleTypeOptions = [
  {
    label: 'Sedan',
    value: 'sedan'
  },
  {
    label: 'Toyota Corolla',
    value: 'toyota corolla'
  },
];

export const facilitiesOptions = [
  {
    label: 'Water bottle',
    value: 'water'
  },
  {
    label: 'Chips',
    value: 'chips'
  },
];

export const assignDriverOptions = [
  {
    label: 'Ahmad Ali',
    value: 'ahmad ali'
  },
  {
    label: 'Usman',
    value: 'usman'
  },
];


