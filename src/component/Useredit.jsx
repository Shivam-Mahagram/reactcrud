import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Useredit = () => {
    // const history=useHistory();

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    const [useredit, setUseredit] = useState({
        name: '',
        email: '',
        mobile: ''
    });


    const handleredit = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUseredit({ ...useredit, [name]: value })
    }

    useEffect(() => {
        const edituserid = async () => {
            const reqdata = await fetch(`http://localhost:3333/user/${id}`);
            const res = reqdata.json();
            setUseredit(await res);
        }
        edituserid();
    }, [id])

    const updateuser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3333/user/${id}`, useredit).then(res => {

            if (res.status === 200) {
                toast("User Updated Successfully!");
                navigate('/userlist');
                document.getElementById('User_form').reset();
            }
            else if (res.status === 400 && res.status === 404) {
                setUseredit({ ...useredit, error_list: res.data.errors });

            }
        })
    }

    return (
        <>
            <div className='row mt-4'>
                <div className='col-md-2 col-sm col-xl-2'></div>
                <div className='col-md-8 col-sm-12 col-xl-8'>
                    <h5>Update User Details </h5>
                    <div className="card w-100">

                        <div className="card-body">
                            <form action='' onSubmit={updateuser} id="User_form">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' onChange={handleredit} value={useredit.name} placeholder="Please enter name" />
                                </div><div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={handleredit} value={useredit.email} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Mobile number</label>
                                    <input type="text" className="form-control" name='mobile' onChange={handleredit} value={useredit.mobile} placeholder="Please Enter Mobile number" />
                                </div>

                                <div className="mb-3">
                                    <button type="submit" className="btn btn-success form-control">Update</button>
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

export default Useredit