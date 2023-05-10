import React from "react";
function Donelist1(props)
{

    return(
        <>
        <h1>Donelist classes</h1>
        {
           props.DoneItem.map((item)=>{
                return(
                    <>{
                        item.deleted===false?(<>
                      <ul>
                        <li>{item.title}
                        <button id="button" className="btn btn-success" onClick={()=> props.toggleTodo(item.id)}>undo</button>
                        <button id="button" className="btn btn-danger" onClick={()=> props.deletedTodo(item.id)}>delete</button></li>
                        </ul>
                        </>):  <><p> data deleted</p></>
                    }
                    </>
                
                )
            })
        } </>

    )
}
export default Donelist1