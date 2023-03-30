import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {

  return (
    <>
    <div className='container mt-4'>
     <nav className="navbar navbar-expand-lg " Style="background-color: #e3f2fd;">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>SHIVAM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/createuser" className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to="/userlist" className="nav-link">Userlist</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
             
            </ul>
        </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Home