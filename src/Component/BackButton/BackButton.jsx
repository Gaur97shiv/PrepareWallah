import { SlArrowLeftCircle } from "react-icons/sl";
import React from 'react'
import { Link } from "react-router-dom";
const BackButton = () => {
  return (

    <Link to="/">
       <SlArrowLeftCircle  size={50}/>

    </Link>
  )
}

export default BackButton
