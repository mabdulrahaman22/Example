import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
const Weatherapp=()=>{
    const [temperature, setTemperature]=useState("");
    const [city, setCity]=useState("");
    const [country,setCountry]=useState("");

    const getWeatherData=(city,country)=>{
           axios({
            method:"search"
            url:'https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5e017f2524f71916bd4455ed68887c24&units=metric'

           })
           .then((response)=>{
            console.log(response.data.main.temp);
            setTemperature(response.data.main.temp);
           })
           .catch((error)=>{
            console.log(error);
           })
    };
    return(
        <>
        <div>
        {Math.round(temperature*100)/100}degree celcius
        <input type="text" value={city} onChange={(event)=>setCity(event.target.value)}></input>
        <input type="text" value={country} onChange={(event)=>setCountry(event.target.value)}></input>
        <button onClick={()=>{getWeatherData(city,country)}}>search</button>
        </div>
        </>
    )
}
export default Weatherapp