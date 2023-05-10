import React from "react";

export default function Result({WeatherData}){
    return(
        <div className="ret">
        
            <div className="weather">

                { 
                   WeatherData.length !== 0
                      ?
                    <>
            
                        <h2 id="img"> <img id="img1"src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} alt="" />{WeatherData.name}</h2>
                        <div>
                            <div>Feels like:{WeatherData.main.feels_like}</div>
                            <div>Max Temp:{WeatherData.main.temp_max}deg</div>
                            <div>Min Temp:{WeatherData.main.temp_min}deg</div>
                            <div>humidity:{WeatherData.main.humidity}</div>
                            <div>pressure:{WeatherData.main.pressure}</div>
                        <div>
                        <div>
                                   
                                </div>
                          <div> {WeatherData.weather[0].main}</div>
                        </div>
                        </div>    
                    </>
                    :
                    <>
                    
                    </>
                }
            </div>
                      
                      
        </div>
            
        
        
    )
}