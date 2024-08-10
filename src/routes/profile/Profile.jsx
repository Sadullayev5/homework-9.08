import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css'


const Profile = () => {

  const navigate = useNavigate()

  const LoggingOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    navigate('/')
  }

  if(localStorage.getItem('token') === null){
    toast.error('Unautorized' , {
      onClose: () => navigate('/login'),
      autoClose: 1000
    })
  }
  else{
    return (
      <div className="profile-wrapper">
        <div className="profile">
            <img className="profile__img" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />
          <div className="profile__info">
            <h2>Welcome {localStorage.getItem('userName')}!</h2>
          </div>
          <button onClick={LoggingOut} className='logout-btn'>Logout</button>
        </div>
      <ToastContainer/>
      </div>
    )
  }

  return(
    <div>
      <ToastContainer/>
    </div>
  )

}

export default Profile