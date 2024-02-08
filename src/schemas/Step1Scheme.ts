import * as Yup from 'yup';

export const Step1Schema = Yup.object().shape({
  name: Yup.string().min(4, 'Must be at least 4 characters').max(50, 'Must be less than 50 characters').required('This field is required'),
  email_address: Yup.string().email('Invalid email').required('This field is required'),
  phone_number: Yup.string().min(10, 'Must be at least 10 characters').max(15, 'Must be less than 15 characters').required('This field is required')
})