import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import { auth } from '../../Validations/firebase';
import signupSchema from '../../schemas/signupSchema';
import TextInput from "../../Component/TextInput/TextInput"
import { useNavigate } from 'react-router-dom';
import BackButton from '../../Component/BackButton/BackButton';
export const Signup = () => {
  const dispatch=useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, gmail, password } = values; 
    if (isSignInForm) {
      createUserWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-up error:", errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, gmail, password)
        .then((userCredential) => {
          const user = userCredential.user;
       dispatch("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-up error:", errorCode, errorMessage);
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      gmail: '',
      password: ''
    },
    validationSchema: signupSchema,
  });

  const { values, touched, handleBlur, handleChange, errors, isSubmitting } = formik;
  
  return (
    <div>
      <div className="flex  justify-between w-full px-5 bg-sky-200  ">
  <div className="my-10">
    <BackButton />
  </div>
  <div className="text-4xl mt-10 flex justify-center w-full absolute left-1/2 transform -translate-x-1/2">
    Welcome to Prepare-Well
  </div>
</div>
<form className='w-1/2 my-56 mx-auto bg-transparent p-12 rounded-lg border-2 border-x-slate-500' onSubmit={handleSubmit}>
      <h1 className='font-bold text-xl mb-7'>{isSignInForm ? 'Sign-up' : 'Sign-in'}</h1>
      {isSignInForm && (
        <TextInput
          type='text'
          name='fullName'
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='name'
          error={errors.fullName && touched.fullName ? true : false}
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
        error={errors.gmail && touched.gmail ? true : false}
        errormessage={errors.gmail}
      />
      <TextInput
        type='text'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='password'
        error={errors.password && touched.password ? true : false}
        errormessage={errors.password}
      />
      <button
        type="submit"
        className='block w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600'
        disabled={ !values.gmail || !values.password|| errors.gmail || errors.password}
      >
        {isSignInForm ? 'Sign-up' : 'Sign-in'}
      </button>
      <p className='my-6 font-semibold cursor-pointer' onClick={toggleSignIn}>
        {isSignInForm ? 'Already registered? Sign in now' : ' New to KYC? Sign up now'}
      </p>
    </form>
    </div>
    
  );
};

export default Signup;
