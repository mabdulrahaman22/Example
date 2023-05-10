import React from "react";
class Donelist extends React.Component{
    constructor(props)
    {
        super()
    }
    render()
    {
        return(
            <>
            <h1>Donelist classes</h1>
            {
                this.props.doneitem.map((item)=>{
                    return(
                        <>{
                            item.deleted===false?(<>
                        <ul>
                        <li>{item.title}
                        <button id="button" className="btn btn-success" onClick={()=> this.props.toggletodo(item.id)}>undo</button>
                        <button id="button" className="btn btn-danger" onClick={()=> this.props.deletedtodo(item.id)}>delete</button></li>
                        </ul>
                        </> ):<><p> data deleted</p></>
                    }
                    </>
                )
        }
        )}
        </>
        )}
}

export default Donelist;