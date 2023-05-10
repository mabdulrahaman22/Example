import React from "react";
import { useState,useEffect } from "react";
import {setToken,signIn} from './Api1';
import {useNavigate} from "react-router-dom";




const Registration=()=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[fname,setFname]=useState();
    const[lname,setLname]=useState();
    const[age,setAge]=useState();
    const[gender,setGender]=useState();
    const navigate=useNavigate();
    
    const setRegistrationform=(key,event)=>{
        const value=event.target.value
        if (key==="email") {
            setEmail(value)
        } 
          else if  (key==="password"){
            setPassword(value)
          }
           else if  (key==="fname"){
            setFname(value)
           }
           else if  (key==="lname"){
            setLname(value)
           }
           else if  (key==="age"){
            setAge(value)
           }
           else if  (key==="gender"){
            setGender(value)
           }
           else  {
            console.log("Registration successfull")
           }
        }
        const handleFormSubmit=async(event)=>{
            event.preventDefault();
            await signIn(email,password,fname,lname,age,gender)

            navigate("/posts")
        }   
        
return(
    <div className="mb-3">
        <h5>Registrationform</h5>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Email:</label>
                <input type="text" className="form-control"onChange={(e)=>setRegistrationform("email",e)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" className="form-control" onChange={(e)=>setRegistrationform("password",e)}></input>
            </div>
            <div>
                <label>Fname:</label>
                <input type="text"  className="form-control" onChange={(e)=>setRegistrationform("fname",e)}></input>
            </div>
            <div>
            <label>Lname:</label>
                <input type="text"  className="form-control" onChange={(e)=>setRegistrationform("lname",e)}></input>
            </div>
            <div>
                <label>Age:</label>
                <input type="text"  className="form-control" onChange={(e)=>setRegistrationform("age",e)}></input>
            </div>
            <div>
                <label>Gender:</label>
                <input type="text"  className="form-control" onChange={(e)=>setRegistrationform("gender",e)}></input>
            </div>
            <input type="submit" className="btn btn-primary lg"value="Registration"></input>
        </form>
    </div>
)        
}
export default Registration;