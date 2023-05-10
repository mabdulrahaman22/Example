import Search from './Search';
import Result from './Result';
import { useState } from 'react';
import axios from 'axios';
function Weatherreport(){
  const [search,setsearch]=useState("");
  const [weather,setWeather]=useState([]);

  const changeSearch=(value)=>{
    setsearch(value);
 }
  const searchweatherHandler=()=>{
    if(search !==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e017f2524f71916bd4455ed68887c24&units=metric`)
      .then(
        (response)=>{
          console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error)=>{
       console.log(error);
        }
      )
    }
  }
  return(
    <div className="wea">
      <Search searchData={search} eventHandler={changeSearch} searchweather={searchweatherHandler} />
      <div className="res">
      <Result WeatherData={weather}/>
      </div>
      </div>
  );
}

export default Weatherreport;