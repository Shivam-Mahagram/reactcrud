
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import CreateUser from './component/CreateUser'
import Userlist from './component/UserList';
import Login from './component/Login';
import Useredit from './component/Useredit';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Auth from './component/Auth';

function App() {
  return (
    <>
    <div className='container'>
    <Home></Home>
    
    
   
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/userlist' element={<Auth Component={Userlist}/>}></Route>
          <Route  exact path='/createuser' element={<Auth Component={CreateUser}/>}></Route>
          <Route  exact path='/useredit/:id' element={<Auth Component={Useredit}/>}></Route>
        </Routes>
        </div>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
