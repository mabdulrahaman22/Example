import React from "react"
import axios from "axios"
class ImageSearch extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={Image:[],searchtext:""}
    }
    getImage=(query)=>{
        const url="https://api.unsplash.com/search/photos?client_id=Yn6aMfkfQ_FRS_XCyawujLyxXs6oV_lnGbG6fGMJxe0&page=1&query="+query
        axios.get(url).then((res)=>this.setState({Image:res.data.results}))
        .catch((err)=>console.log(err))
    }
    handleSearch=(event)=>{
        console.log(event.target.value)
        this.setState({searchtext:event.target.value})
        console.log(this.state.searchtext)
    }
    handlersubmitted=(event)=>{
        console.log("function called")
        event.preventDefault()
        this.getImage(this.state.searchtext)
    }
    render()
    {
        return(
            <>
            <form onSubmit={this.handlersubmitted}>
                <input type="text" onChange={this.handleSearch}></input>
                <input type="submit" value="search"></input>
            </form>
            {this.state.Image.map((img)=>
            <img src={img.urls.small_s3}>
                </img>
                )}
            </>
        )
    }
}
export default ImageSearch