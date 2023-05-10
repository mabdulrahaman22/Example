import React from "react";
import axios from 'axios'
class Image extends React.Component
{
constructor(props)
{
    super(props); 
    this.state={image:[],serachtext:""}

}
componentDidMount()
{
    const url="https://api.unsplash.com/search/photos?client_id=okiofV_ZIQP5NCrdOSi3ju9Km4ibNk0SjDEN-cvr8PE&page=1&query=office"
axios.get(url).then((res)=>this.setState({image:res.data.results}))
.catch((err)=>console.log(err))
}
handleSearch=(event)=>{
    console.log(event.target.value)
   this.setState( {serachtext:event.target.value})
   //console.log(this.state.serachtext)
}
handlersubmited=(event)=>{
    console.log("function called");
    event.preventDefault();
this.getImage(this.state.serachtext)
}
render()  // predefined method , which browesr to render the jsx element  
{
    return(
        <>
        <form onSubmit={this.handlersubmited}>
            <input type="text" onChange={this.handleSearch}></input>
            <input type="submit" value="serach"></input>
        </form>
         {this.state.image.map((img)=>
    <img src={img.urls.small_s3}>
    </img>
        
    ) }</>)
}
}

export default Image