import { useEffect,useState } from "react";
import {getPosts} from './Api'
import  axios from "axios"

const Posts=()=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        async function init(){
            try {
                console.log("post is called")
                const posts=await getPosts()
                setPosts(posts)
            } catch (err) {
                console.log(err)
            }
        }
        init()
    },[])
    return(
        <>
        {
            posts.map((post)=>{
                return(
                    <div>
                        <div>
                            <p>{post.comment}</p>
                            <small>{post.author.name}</small>
                        </div>
                    </div>
                )
            }
            )
        }
        </>
    )
    }
export default Posts