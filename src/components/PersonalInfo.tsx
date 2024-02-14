import { Field, Form, Formik, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Step1Props, Step1PropsState } from '../interfaces/Steps'
import { setName, setEmailAddress, setPhoneNumber } from '../redux/slices/Step1Slice'
import { Step1Schema } from '../schemas/Step1Scheme'
import { ButtonsFooter } from './ButtonsFooter'
import { NextBtn } from './NextBtn'
import { useNavigate } from 'react-router-dom'
import { StepsSidebarInfo } from '../constants/StepsInfo'

const PersonalInfoForm = () => {

  const step1redux = useSelector((state: Step1PropsState) => state.step1)
  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const onSubmit = (values: Step1Props) => {
    dispatch(setName(values.name))
    dispatch(setEmailAddress(values.email_address))
    dispatch(setPhoneNumber(values.phone_number))

    const urlPath = StepsSidebarInfo.find((item) => item.index === currentStep.value + 1)?.url as string

    navigate(urlPath)
  }

  return (
    <Formik
      initialValues={step1redux}
      validationSchema={Step1Schema}
      validationOnChange={true}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, errors, touched }) => (
        <Form className='flex flex-col justify-between gap-4 h-full'>
          <section className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 justify-between w-full items-center'>
                <label className='font-semibold lg:text-lg text-blue-900' htmlFor={'name'}>Name</label>
                <p className='font-semibold text-red-500'><ErrorMessage name='name' component='span' /></p>
              </div>
              <Field
                {...getFieldProps('name')}
                className={`border px-4 py-2 rounded-lg lg:text-xl font-semibold outline-violet-800 ${errors.name && touched.name ? 'border-red-500 border-2' : 'border-zinc-400'}`} placeholder='e.g. Vicente Jorquera' type='text' name='name'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 justify-between w-full items-center'>
                <label className='font-semibold lg:text-lg text-blue-900' htmlFor={'email_address'}>Email Address</label>
                <p className='font-semibold text-red-500'><ErrorMessage name='email_address' component='span' /></p>
              </div>
              <Field
                {...getFieldProps('email_address')}
                className={`border px-4 py-2 rounded-lg lg:text-xl font-semibold outline-violet-800 ${errors.email_address && touched.email_address ? 'border-red-500 border-2' : 'border-zinc-400'}`} placeholder='e.g. vicente@jorquera.com' type='text' name='email_address'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 justify-between w-full items-center'>
                <label className='font-semibold lg:text-lg text-blue-900' htmlFor={'phone_number'}>Phone Number</label>
                <p className='font-semibold text-red-500'><ErrorMessage name='phone_number' component='span' /></p>
              </div>
              <Field
                {...getFieldProps('phone_number')}
                className={`border px-4 py-2 rounded-lg lg:text-xl font-semibold outline-violet-800 ${errors.phone_number && touched.phone_number ? 'border-red-500 border-2' : 'border-zinc-400'}`} placeholder='e.g. +56 9 12 34 56 78' type='text' name='phone_number'
              />
            </div>
          </section>
          <ButtonsFooter>
            <NextBtn />
          </ButtonsFooter>
        </Form>
      )}
    </Formik>
  )
}

export { PersonalInfoForm }