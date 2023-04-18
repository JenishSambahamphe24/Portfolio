import React, { useState, useEffect } from 'react'
import coldBg from './Images/cold.jpg'
import hotBg from './Images/hot.jpg'
import { getFormattedWeatherData } from '../WeatherService'
import Description from './Components/Description'


export default function App() {

  const [weather, setweather] = useState(null)
  const [units, setunits] = useState("imperial")

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('london',units);
      setweather(data)
    }
    fetchWeatherData();
  })


  return (
    <div className='app' style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        { weather && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name='city' placeholder='Enter City...' />
              <button>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{weather.name},{weather.country}</h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className='temperature'>
                <h2>{`${weather.temp.toFixed()}°${units==="metric"?"C":"F"}` }</h2>
              </div>
            </div>
            Bottom DEscription
            <Description weather={weather} units={units} />
          </div>
        )}


      </div>
    </div>
  )
}
