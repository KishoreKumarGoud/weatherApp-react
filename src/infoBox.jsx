import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WeatherApp from './WeatherApp';
export default function InforBox({Info})
{
    let img_url="https://tse3.mm.bing.net/th?id=OIP.tqHMIkBqXiHZJH5GwDQKFgHaEB&pid=Api&P=0&h=180";
    let hot_url="https://tse2.mm.bing.net/th?id=OIP.UX218l5TN36IxbKSsIQ3hwHaE7&pid=Api&P=0&h=180";
    let rain_url="https://tse3.mm.bing.net/th?id=OIP.qyDa43AvWzqnxNi_PFz9fAHaFj&pid=Api&P=0&h=180";
    let cold_url="https://tse2.mm.bing.net/th?id=OIP.WeFtNZYn5rRjTlahLQbFWwHaEK&pid=Api&P=0&h=180";

   
    return (
        <div>
        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          Info.humidity>80? 
          rain_url
          :Info.temp>15? 
          hot_url:
          cold_url
        }
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={Info.temp}&deg;C</p>
            <p>Humidity={Info.humidity}</p>
            <p>Min Temp={Info.tempMin}</p>
            <p>Max Temp={Info.tempMax}</p>
            <p>The weather feels like{Info.feelslike}&deg;C

            </p>

         
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}