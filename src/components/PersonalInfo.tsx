import { Field, Form, Formik, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Step1PropsState } from '../interfaces/Steps'
import { setName, setEmailAddress, setPhoneNumber } from '../redux/slices/Step1Slice'

const PersonalInfoForm = () => {
  
  const step1redux = useSelector((state: Step1PropsState) => state.step1)

  const [name, setNameState] = useState(step1redux.name) 
  const [email, setEmailState] = useState(step1redux.email_address)
  const [phone, setPhoneState] = useState(step1redux.phone_number)
  const dispatch = useDispatch()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value)
    dispatch(setName(e.target.value))
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value)
    dispatch(setEmailAddress(e.target.value))
  }

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneState(e.target.value)
    dispatch(setPhoneNumber(e.target.value))
  }

  return (
    <Formik
      initialValues={step1redux}
      onSubmit={() => {}}
    >
      {() => (
        <Form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-lg text-blue-900' htmlFor={'name'}>Name</label>
            <Field onChange={handleName} value={name} type='text' name='name' placeholder='e.g. Vicente Jorquera' className='border border-zinc-400 px-4 py-2 rounded-lg text-xl font-semibold outline-violet-800' />
            <ErrorMessage name='name' component='div' />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-lg text-blue-900' htmlFor={'name'}>Email Address</label>
            <Field onChange={handleEmail} value={email} type='text' name='email' placeholder='e.g. vicente@jorquera.com' className='border border-zinc-400 px-4 py-2 rounded-lg text-xl font-semibold outline-violet-800' />
            <ErrorMessage name='email' component='div' />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-lg text-blue-900' htmlFor={'name'}>Phone Number</label>
            <Field onChange={handlePhone} value={phone} type='number' name='phone' placeholder='e.g. +1 234 567 890' className='border border-zinc-400 px-4 py-2 rounded-lg text-xl font-semibold outline-violet-800' />
            <ErrorMessage name='phone' component='div' />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export { PersonalInfoForm }