//import axios from "axios";
import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3001"
  });

 export const setToken=(token)=>{
     instance.defaults.headers.common["Authorization"]="Bearer"+token;
     localStorage.setItem("TOKEN",token)
    }

 const token=localStorage.getItem("TOKEN") 
 if (token) 
    setToken(token)
    export const signIn = async(email,password,fname,lname,age,gender)=>{
        try{
            const res=await instance.post("/user",{
                email, password,fname,lname,age,gender
            })
            setToken(res.data.token)
            console.log(res)
            return res
           
        

           }catch(e){
            console.log(e)
           }
     }
    export const getPosts=async()=>{
        try{
            const res=await instance.get("/comment")
            console.log(res)
            return res
        }catch(e){
            console.log(e)
            throw e;
        }
    }
 