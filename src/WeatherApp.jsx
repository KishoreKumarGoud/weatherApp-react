import { useState } from "react";
import SearchBox
from "./SearchBox";
import InforBox from "./infoBox";
export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Hyderabad",
        feelslike: 24.28,
        temp:25.05,
        tempMin:25.04,
        tempMax: 30,
        humidity: 47,
        weather:"haze",
    });
let updateInfo=(result)=>
{
    setWeatherInfo(result);
}
    return(
        <div style={{textAlign:"center"}}><h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InforBox info={weatherInfo}/>
        </div>
    );
}