
import React ,  { useState } from 'react'
import axios from "axios"
import {Link ,  useNavigate } from 'react-router-dom';

const AddUser = () => {

  let navigate = useNavigate()

     const [user , setUser] = useState({
          name:"",
          username:"",
          email:""
     });

     const {name , username , email} = user;

     const changeHandler = (e)=>{
          
      setUser({...user , [e.target.name] : e.target.value})
     }

    
     const submitHandler = async (e)=>{
          e.preventDefault()
          await axios.post("http://localhost:8080/user" , user)
          navigate("/")
     }



  return (
    <div className='container'>
         <div className='row'>
              <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                   <h2 className='text-center m-4'>Register User</h2>

                   <form onSubmit={e => submitHandler(e)}>
                     <div className='mb-3'>
                     <label for="name" className='form-label'>Name</label>
                     <input type={"text"} onChange={e=>changeHandler(e)} value={name}  placeholder='Enter your name' className='form-control' name="name"/>
                   </div>
                   <div className='mb-3'>
                     <label for="username" className='form-label'>UserName</label>
                     <input type={"text"} onChange={e=>changeHandler(e)} value={username}  placeholder='Enter your username' className='form-control' name="username"/>
                   </div>
                   <div className='mb-3'>
                     <label for="email" className='form-label'>E-Mail</label>
                     <input type={"email"}  onChange={e=>changeHandler(e)} value={email} placeholder='Enter your mail' className='form-control' name="email"/>
                   </div>

                   <button type='submit' className='btn btn-outline-primary'>Submit</button>
                   <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                  </form> 
              </div>
         </div>
    </div>
  );
}

export default AddUser

