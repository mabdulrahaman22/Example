import React,{useRef} from "react";
import './Weather.css';


export default function Search(props){
    const SearchInput=useRef();
    return(
        <div className="container">
            <h3> Please enter the city name</h3>
            <input type="search" value={props.searchData} onChange={()=>props.eventHandler(SearchInput.current.value)} ref={SearchInput}/>
            <br/>
            <br/>
            <button id="but" onClick={props.searchweather}><b>Search</b></button> 
        </div>
    )
}