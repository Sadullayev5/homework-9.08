import React , { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate = useNavigate();
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
      axios.post('https://fakestoreapi.com/auth/login', { username: userName,   password: password})
    .then (response => {
      if(response.status === 200){
        localStorage.setItem('userName' , userName)
        localStorage.setItem('token' , response.data.token)
        toast.success('Login Successfully')
        navigate('/profile')
      }
      else{
        alert(response.data)
      }
    }
    )
    
  }

  return (
    <div className='login-wrapper'>

      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button className='login-btn' type='submit'>Login</button>
      </form>
      <ToastContainer />
      </div>
      
  )
}

export default Login