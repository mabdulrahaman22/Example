import React from "react"
import axios from "axios"
import { useState } from "react"
function ImageSearchfn()
{
    const [image,setimage]=useState([])
    const [searchtext,settext]=useState("")
    const getImage=(query)=>{
        const url="https://api.unsplash.com/search/photos?client_id=f1-EjZuZWRcTRwx4nSplNS1MoJajM7uhy5GyNmlFbHI&page=1&query="+query
       axios.get(url).then((res)=>setimage(res.data.results))
       .catch((err)=>console.log(err)) 
    }
    const handleSearch=(event)=>{
        console.log(event.target.value)
        settext(event.target.value)
    }
    const handlersubmitted=(event)=>{
        console.log("function called")
        event.preventDefault()
        getImage(searchtext)
    }
    return(<>
    <form onSubmit={handlersubmitted}>
        <input type="text" onChange={handleSearch}></input>
        <input type="submit" value="search"></input>
        </form>
        {image.map((img)=>
        <img src={img.urls.small_s3}>

        </img>
        )}
        </>)
}
export default ImageSearchfn