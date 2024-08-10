import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    if(localStorage.getItem('token') === null){

        return(
            <nav>
        <ul>
            <li><Link className='nav-link' to='/'>Home</Link></li>
            <li><Link className='nav-link' to='/products'>Products</Link></li>
            <li><Link className='nav-link' to='/login'>Log in</Link></li>
        </ul>
    </nav>
        )
    }
    else{
  return (
    <nav>
        <ul>
            <li><Link className='nav-link' to='/'>Home</Link></li>
            <li><Link className='nav-link' to='/products'>Products</Link></li>
            <li><Link className='nav-link' to='/profile'>Profile</Link></li>
        </ul>
    </nav>
  )
}
}

export default Nav