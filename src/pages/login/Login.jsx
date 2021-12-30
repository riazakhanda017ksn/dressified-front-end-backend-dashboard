import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  
    const[username,setUsername]=useState('')
    const[password,setPassword] = useState('') 
    const dispatch = useDispatch()
    
    const handleClick =(e)=>{
       e.preventDefault()
       login(dispatch,{username,password})
   }
    //
    return (
        <div className="login">
        <div className='login-system'>
            <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleClick}>Log In</button>
        </div>
        </div>
    );
};

export default Login;