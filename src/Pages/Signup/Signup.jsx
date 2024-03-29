import React, { useState } from 'react';
import { useFormik } from 'formik';
import signupSchema from '../../schemas/signupSchema';
import TextInput from '../../Component/Navbar/TextInput/TextInput';

export const Signup = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };



  const formik = useFormik({
    initialValues: {
      fullName: '',
      gmail: '',
      password: ''
    },
    validationSchema: signupSchema
  });

  const { values, touched, handleBlur, handleChange, errors } = formik;
  const handleClick = () => {
    const { fullName, gmail, password } = formik.values; 
    console.log(fullName);
  };
  return (
    <form className='w-1/2 my-56 mx-auto bg-transparent p-12 rounded-lg border-2 border-x-slate-500'>
      <h1 className='font-bold text-xl mb-7'>{isSignInForm ? 'Sign-up' : 'Sign-in'}</h1>
      {isSignInForm && (
        <TextInput
          type='text'
          name='fullName'
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='name'
          error={errors.fullName && touched.fullName}
          errormessage={errors.fullName}
        />
      )}
      <TextInput
        type='text'
        name='gmail'
        value={values.gmail}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='gmail'
        error={errors.gmail && touched.gmail}
        errormessage={errors.gmail}
      />
      <TextInput
        type='text'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='password'
        error={errors.password && touched.password}
        errormessage={errors.password}
      />
      <button className='block w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={handleClick}>
        {isSignInForm ? 'Sign-up' : 'Sign-in'}
      </button>
      <p className='my-6 font-semibold cursor-pointer' onClick={toggleSignIn}>
        {isSignInForm ? 'Already registered? Sign in now' : ' New to KYC? Sign up now'}
      </p>
    </form>
  );
};

export default Signup;
