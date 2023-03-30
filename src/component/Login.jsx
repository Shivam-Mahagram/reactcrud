
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import axios from 'axios'


const Login = () => {

    const email='Shivam@gmail.com';
    const password='shivam@123';

    const[signin,setSignin]=useState({
        email:'',
        password:''
    })
    
    const handler=(e)=>{

        const name=e.target.name;
        const value=e.target.value;
        setSignin({...signin,[name]:value})

    }

    const navigate=useNavigate()

    const login=(e)=>{
        e.preventDefault();

        localStorage.setItem('login',true)
       
    // if(email===signin['email'] && password===signin['password']){
    //         localStorage.setItem('login',true)
    //     }

}

  useEffect(()=>{

    let login=localStorage.getItem('login');
    if(login){
        navigate('/Home')
    }

  })
    
    return (
    <>
     <div className='row mt-4'>
                <div className='col-md-2 col-sm col-xl-2'></div>
                <div className='col-md-8 col-sm-12 col-xl-8'>
                    <h5>Login </h5>
                    <div className="card w-100">

                        <div className="card-body">
                            <form action='' id="User_form" onSubmit={login}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="text" className="form-control" name='email' placeholder="Please enter name" onChange={handler} value={signin.email} />
                               </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password'  placeholder="Please enter password" onChange={handler} value={signin.password} />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-success form-control">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-md-2 col-sm col-xl-2'></div>
    </>
  )
}

export default Login