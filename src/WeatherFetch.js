import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = 'API_KEY';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [maintemp_min,setMainTempmin] = useState('');
    const [maintemp_max,setMainTempmax] = useState('');
    const [mainpressure,setmainpressure] = useState('');
    const [mainhumidity,setmainHumidity]=useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=5e017f2524f71916bd4455ed68887c24&units=metric')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setMainTempmin(data.main.temp_min);
    setMainTempmax(data.main.temp_max);
    setmainpressure(data.main.pressure);
    setmainHumidity(data.main.humidity);
    setIconID(data.weather[0].icon);
})
},[])
return (
    <>
    <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
    <h1>Feels like: {feels_like} Degrees Celsius</h1>
    <h1>Main Temperature minimum: {maintemp_min} Degrees Celsius</h1>
    <h1>Main Temperature maximum: {maintemp_max} Degrees Celsius</h1>
    <h1>pressure: {mainpressure}</h1>
    <h1>Humidity: {mainhumidity}</h1>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
    </>
    )
}
export default WeatherFetch;