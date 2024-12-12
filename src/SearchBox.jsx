import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo})
{
    let [city,setCity]= useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    
    const API_KEY="ad07c04a02e4c86765f67310e0f25314";

    let getWeatherInfo = async () =>
    {
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      let result= 
      { 
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_Like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    };
    
  

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    };

let handleSubmit = async (evt) =>
{
    evt.preventDefault();
   
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
}


    return (
    <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handleChange}
         />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">Search</Button>
 
        </form>
        </div>
    )
}