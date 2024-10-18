import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [answer,setAnswer]=useState("");

    const navigate=useNavigate()

    // form function
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});
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
    <div>
      <Layout title="Register - Ecommerce App">
        <div className='register'>
        <h1>Register Page</h1>
       <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputName"  placeholder="Enter Name" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail">Email</label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail"  placeholder="Enter Email" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPhone">Phone</label>
    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="exampleInputPhone"  placeholder="Enter Phone Number" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputAddress">Address</label>
    <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" id="exampleInputAddress"  placeholder="Enter Address" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputAddress">Your lucky Number</label>
    <input type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)} className="form-control" id="exampleInputAddress"  placeholder="Enter Number" required/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>

      </Layout>
    </div>
  )
}

export default Register;
