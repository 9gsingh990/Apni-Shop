
import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate,useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useAuth } from '../../context/auth'
const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
 const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
    const location=useLocation()

    // form function
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
            if(res.data.success){
                toast.success(res.data.message);
                setAuth({
                  ...auth,
                  user:res.data.user,
                  token:res.data.token,
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate(location.state||'/');
            }else{
                toast.error(res.data.message)
            }
        } catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
        
    }
  return (
    <div>
      <Layout title="Register - Ecommerce App">
        <div className='register'>
        <h1>Login Page</h1>
       <form onSubmit={handleSubmit}>
 
  <div className="form-group">
    <label htmlFor="exampleInputEmail">Email</label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail"  placeholder="Enter Email" required/>
    
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <div className='mb-3'>
 
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
  </div>
 

  
</form>

        </div>

      </Layout>
    </div>
  )
}

export default Login
