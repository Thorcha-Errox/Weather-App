import React, { useEffect, useState, useRef } from 'react'
import './Weather.css'
import search_icon from '../assets/ssearch.png'
import humidity_icon from '../assets/humidity2.png'
import wind_icon from '../assets/wind.png'
import feel_like_icon from '../assets/feels-likes.png'
import sunrise_icon from '../assets/sunrise.png'
import sunset_icon from '../assets/sunset.png'
import dclear_sky_icons from '../assets/clear-sun.png'
import nclear_sky_icons from '../assets/clear-night.png'
import dfew_clouds_icons from '../assets/day-few-clouds.png'
import nfew_clouds_icons from '../assets/night-few-clouds.png'
import scattered_clouds_icons from '../assets/scattered-clouds.png'
import broken_clouds_icons from '../assets/broken-clouds.png'
import shower_rain_icons from '../assets/shower-rain.png'
import day_rain_icons from '../assets/day-rain.png'
import night_rain_icons from '../assets/night-rain.png'
import thunderstrom_icons from '../assets/thunderstorm.png'
import snow_icons from '../assets/snow.png'
import mist_icons from '../assets/mist.png'


function Weather(){
  let inputRef = useRef(); 
  let [WeatherData,setWeatherData] = useState(false);

  let allIcons = {
    "01d": dclear_sky_icons,
    "01n": nclear_sky_icons,
    "02d": dfew_clouds_icons,
    "02n": nfew_clouds_icons,
    "03d": scattered_clouds_icons,
    "03n": scattered_clouds_icons,
    "04d": broken_clouds_icons,
    "04n": broken_clouds_icons,
    "09d": shower_rain_icons,
    "09n": shower_rain_icons,
    "10d": day_rain_icons,
    "10n": night_rain_icons,
    "11d": thunderstrom_icons,
    "11n": thunderstrom_icons,
    "13d": snow_icons,
    "13n": snow_icons,
    "50d": mist_icons,
    "50n": mist_icons
  }
  let search =async (city)=>{
    if(city=== " "){
      alert("Enter city Name");
      return;
    }
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        let response = await fetch(url);
        let data = await response.json();

        if(!response.ok){
          alert(data.message);
          return;
        }
        // console.log(data); // this is to see the data which has been fetched from api
        let icon = allIcons[data.weather[0].icon] || dclear_sky_icons;
        let options = {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        let sunriseTime = new Date(data.sys.sunrise * 1000);
        let sunriseData = sunriseTime.toLocaleTimeString([], options).replace(' : ',' : ') + '';
        let sunsetTime = new Date(data.sys.sunset * 1000);
        let sunsetData = sunsetTime.toLocaleTimeString([], options).replace(' : ',' : ') + '';

        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          feels_like:Math.floor(data.main.feels_like),
          temprature: Math.floor( data.main.temp),
          location: data.name,
          icon: icon,
          icon_description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
          sunrise: sunriseData,
          sunset: sunsetData
        })
        inputRef.current.value = '';

      } catch (error) {
          setWeatherData(false);
          console.error("Error in fetching weather data !")
    }
  }

  return (

    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search'  onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search(inputRef.current.value);
            }
        }}/>
        <button>
          <img src={search_icon} alt="" onClick={()=> search(inputRef.current.value)} />
        </button>
      </div>


      {WeatherData?
      <>
      <div className='upper-data'>
        <div className='time-sunrise'>
          <div className='row'>
            <img src={sunrise_icon} alt="" />
            <div>
              <p>{WeatherData.sunrise}</p>
              <span>Sunrise</span>
            </div>
          </div>
        </div>

          <div>
            <img src={WeatherData.icon} alt="" className='weather-icon'/>
            <p className='weather-icon-detail'>{WeatherData.icon_description}</p>
            <p className='temprature'>{WeatherData.temprature}°c</p>
            <p className='location'>{WeatherData.location}</p>
          </div>

        <div className='time-sunset'>
          <div className='row'>
            <img src={sunset_icon} alt="" />
            <div>
              <p>{WeatherData.sunset}</p>
              <span>Sunset</span>
            </div>
        </div>

      </div>
      </div>

      <div className="weather-data">

          <div className="col">
            <img src={humidity_icon} alt=""/>
            <div>
              <p>{WeatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={feel_like_icon} alt=""/>
            <div>
              <p>{WeatherData.feels_like} °c</p>
              <span>Feels Like</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt=""/>
            <div>
              <p>{WeatherData.windSpeed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
      </div>

      </>:<></>}
    </div>
  )
}
export default Weather