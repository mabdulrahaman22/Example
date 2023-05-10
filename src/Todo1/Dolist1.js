import React from "react";
function Dolist1(props)
{
    
    return(
        <>
        <h1>Dolist classes</h1>
        {
        props.DoItem.map((item)=>{
            return(
                <>{
                    item.deleted===false?(<>
                    <ul>
                        <li>{item.title}
                        <button id="button" className="btn btn-success" onClick={()=>props.toggleTodo(item.id)}>done</button>
                        <button id="button" className="btn btn-danger" onClick={()=>props.deletedTodo(item.id)}>delete</button></li>
                        </ul>
                        </>) :<><p>data deleted</p></>
        }
        </>
        )
    }
    )}
    </>
)
}
export default Dolist1