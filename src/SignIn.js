import React from "react";
import { useState,useEffect } from "react";
import {setToken,signIn} from './Api';
//import {usehistory} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom";


const SignIn=()=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();

    const setFormData=(key,event)=>{
        const value=event.target.value
        if(key==="email") {
            setEmail(value)
        } else if(key==="password")
        setPassword(value)
            
        }
        const handleFormSubmit=async(event)=>{
            event.preventDefault();
            await signIn(email,password)

            navigate("/posts")
        }
    
 return(
        <div classname='container'>
            <h5>SignIn</h5>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e)=>setFormData("email",e)}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={(e)=>setFormData("password",e)}></input>
                </div>
                <input type="submit" className="btn btn-primary mt-3"value="Sign in"></input>
            </form>
        </div>
    )
}
export default SignIn;