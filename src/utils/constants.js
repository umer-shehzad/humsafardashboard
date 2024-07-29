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
