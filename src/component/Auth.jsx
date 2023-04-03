import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createContext } from "react";

const UserContext = createContext();

const Auth = (props) => {

    const {Component}=props
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){ 
          navigate('/login')
        }
    })
  return (
    <div><Component/></div>
  )
}

export default Auth