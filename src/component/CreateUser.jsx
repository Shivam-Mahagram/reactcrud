import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const navigate=useNavigate()
    
    const [userInput, setuserInput] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserInput({ ...userInput, [name]: value })
    }

    const submitUser = (e) => {
        e.preventDefault();
        const data = {
            name: userInput.name,
            email: userInput.email,
            mobile: userInput.mobile,
            password: userInput.password,
        }
        axios.post(`http://localhost:3333/user`, data).then(res => {

            if (res.status === 201) {
                // alert("User Created Successfully");
                toast("User Created Successfully!");
                navigate('/userlist')

                document.getElementById('User_form').reset();
            }
            else if (res.status === 400 && res.status === 404 && res.status === 500 && res.status ==='') {
                setuserInput({ ...userInput, error_list: res.data.errors });
            }
        })
    }
    return (
        <>
            <div className='row mt-4'>
                <div className='col-md-2 col-sm col-xl-2'></div>
                <div className='col-md-8 col-sm-12 col-xl-8'>
                    <h5>Create User </h5>
                    <div className="card w-100">

                        <div className="card-body">
                            <form action='' onSubmit={submitUser} id="User_form">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' onChange={handleInput} value={userInput.name} placeholder="Please enter name" />
                                </div><div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={handleInput} value={userInput.email} placeholder="name@example.com" />
                                </div><div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Mobile number</label>
                                    <input type="text" className="form-control" name='mobile' onChange={handleInput} value={userInput.mobile} placeholder="Please Enter Mobile number" />
                                </div><div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' onChange={handleInput} value={userInput.password} placeholder="Please enter password" />
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
            <ToastContainer></ToastContainer>


        </>
    )
}

export default CreateUser