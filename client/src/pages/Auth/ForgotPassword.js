
import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [answer,setAnswer]=useState("");

    const navigate=useNavigate()


    // form function
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer});
            if(res.data.success){
                toast.success(res.data.message);
                
                
                navigate('/login');
            }else{
                toast.error(res.data.message)
            }
        } catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
        
    }
  return (
    <Layout title="Forgot Password - Ecommerce App">
        <div className='register'>
        <h1>Reset Password</h1>
       <form onSubmit={handleSubmit}>
 
  <div className="form-group">
    <label htmlFor="exampleInputEmail">Email</label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail"  placeholder="Enter Email" required/>
    
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">New Password</label>
    <input type="password" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Your Lucky Number</label>
    <input type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Number" required/>
  </div>

  <button type="submit" className="btn btn-primary">Reset</button>
  <div className='mb-3'>
 
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
  </div>
 

  
</form>

        </div>

      </Layout>
  )
}

export default ForgotPassword
