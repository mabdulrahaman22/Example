import React from "react"
class Dolist extends React.Component{
    constructor(props)
    {
        super()
    }
    render()
    {
        console.log(this.props.doitem)
        return(
        <>
        <h1>Dolist classes</h1>
        {
            this.props.doitem.map((item)=>{
                return(
                    <>{
                        item.deleted===false?(<>
                        <ul>
                            <li>{item.title}
                            <button id="button" className="btn btn-success" onClick={()=> this.props.toggletodo(item.id)}>done</button>
                            <button id="button" className="btn btn-danger" onClick={()=> this.props.deletedtodo(item.id)}>delete</button></li>
                        </ul>
                    </>) :<><p>data deleted</p></>
                        }
                    </> 
                )          
            
            }
            )}
    </>
    )}
}
    export default Dolist;