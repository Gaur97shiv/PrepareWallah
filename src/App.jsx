import React, { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { Signup } from './Pages/Signup/Signup';
import { auth } from './Validations/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './Store/userSlice';
import SignOut from './Pages/Signup/SignOut';
import Practice from './Pages/Practice';
const App = () => {
  const dispatch=useDispatch();
useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {email,uid,displayName}=user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    
    } 
    else {
     dispatch(removeUser());  
    }
  });
  return ()=> unsubscribe();
}

,[])


  return (
    <div>
        <Routes>
          <Route path='/Practice' element={<Practice/>}></Route>
          <Route path="/" element={<Home />} />
          <Route path="Signup" element={<Signup />} />
          <Route path='SignOut' element={<SignOut/>}></Route>
        </Routes>
    
    </div>
  );
}

export default App;

