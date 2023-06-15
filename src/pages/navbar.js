import React from 'react';
import { Link } from 'react-router-dom';
import openai from '../assets/images/OpenAI_Logo.png';

function Navbar() {
  return (
    <div className='mb-4'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
            <Link to={'/'}>
              <img src={openai} style={{width:'150px'}} alt="openai"/>
            </Link>
            <Link to={'/create-image'}>
              <button className='btn btn-primary'>Create</button>
            </Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar