import * as Yup from 'yup';

export const BACKEND_APIS = "https://humsafar-be-staging-fa84b999b2c8.herokuapp.com"

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z][a-zA-Z0-9]*(\s[a-zA-Z][a-zA-Z0-9]*)?$/, "Name must start with a letter")
    .required('User Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "Contact must be a valid 11-digit phone number")
    .required('Contact is required'),
  gender: Yup.mixed()
    .oneOf(['Male', 'Female'], 'Gender must be either Male or Female')
    .required('Gender is required'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
});

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
    .matches(/^[a-zA-Z0-9@$!%*?&]*$/, 'Password can only contain letters, numbers, and special characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
    .matches(/^[a-zA-Z0-9@$!%*?&]*$/, 'Password can only contain letters, numbers, and special characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});

export const ForgotEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});

export const AddDriverSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z][a-zA-Z0-9]*(\s[a-zA-Z][a-zA-Z0-9]*)?$/, "Name must start with a letter")
    .required('Driver Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^(?:\+92|0)?[1-9][0-9]{9}$/, "The number should be a valid Pakistani mobile or landline number.")
    .required('Contact is required'),
  gender: Yup.mixed()
    .oneOf(['Male', 'Female'], 'Gender must be either Male or Female')
    .required('Gender is required'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
});

export const AddVehicleSchema = Yup.object().shape({
  vehicleOwnerName: Yup.string()
    .optional(),
  vehicleOwnerCNIC: Yup.string()
    .matches(/^[0-9]{13}$/, 'The CNIC should be a valid 13-digit number.')
    .optional(),
  // vehicleOwnerContactNumber: Yup.string()
  //   .matches(/^(?:\+92|0)?[1-9][0-9]{9}$/, 'The number should be a valid Pakistani mobile or landline number.')
  //   .optional(),
  vehicleOwnerAddress: Yup.string()
    .optional(),
  registrationNumber: Yup.string()
    .matches(/^[a-zA-Z0-9-]+$/, 'Registration Number can only contain letters, numbers, and hyphens.')
    .required('Registration Number is required'),
  chasisNumber: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Chasis Number can only contain letters and numbers.')
    .required('Chasis Number is required'),
  engineNumber: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Engine Number can only contain letters and numbers.')
    .required('Engine Number is required'),
  make: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Make can only contain letters.')
    .required('Make is required'),
  makerName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Maker Name can only contain letters.')
    .required('Maker Name is required'),
  totalSeats: Yup.string()
    .matches(/^[1-9][0-9]*$/, 'Total Seats should be a valid number')
    .required('Total Seats is required'),
  horsepower: Yup.string()
    .matches(/^[1-9][0-9]*$/, 'Horsepower should be a valid number')
    .optional(),
  transportType: Yup.string()
    .oneOf(['LTV', 'HTV'], 'Transport Type must be either LTV or HTV')
    .optional(),
  vehicleType: Yup.string()
    .oneOf(['Sedan', 'SUV', 'Van'], 'Vehicle Type must be one of Sedan, SUV, or Van')
    .optional(),
  // mileagePerKM: Yup.number()
  //   .positive('Mileage per KM must be a positive number')
  //   .optional(),
  fuelTankCapacity: Yup.number()
    .positive('Fuel Tank Capacity must be a positive number')
    .required('Fuel Tank Capacity is required'),
  facilities: Yup.array()
    .of(Yup.string())
    .optional(),
  // registrationCardFront: Yup.string()
  //   .url('Registration Card Front must be a valid URL')
  //   .required('Registration Card Front is required'),
  // registrationCarBack: Yup.string()
  //   .url('Registration Card Back must be a valid URL')
  //   .required('Registration Card Back is required')
});
