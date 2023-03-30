import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEdit,FaTrash} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Userlist = () => {
    const navigate=useNavigate()
    const [userlist, setUserlist] = useState([]);

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:3333/user')
            setUserlist(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    
    const deleteuser=(id)=>{
        axios.delete(`http://localhost:3333/user/${id}`).then(res => {

            if (res.status === 200) {
                toast("User deleted");
                navigate('/userlist')
                getUser();
            }
            
        })

    }
    
    return (
        <>
        <div className='container mt-4'>
        <h5>User List </h5>
        <div className="card w-90  mt-4">
        

         <div className="card-body">
            <table className="table table-striped table-hover  mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userlist.map((getuser, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{getuser.name}</td>
                            <td>{getuser.email}</td>
                            <td>{getuser.mobile}</td>
                            <td>
                                <Link to={`/useredit/${getuser.id}`} className='btn  mx-2'><FaRegEdit/></Link>
                                <Link className='btn ' onClick={()=>deleteuser(getuser.id)}><FaTrash/></Link>
                                
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>
            </div>
            </div>
            </div>
        </>
    )
}

export default Userlist