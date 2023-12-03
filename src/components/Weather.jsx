import React, { useState } from 'react'
import axios from 'axios';

export default function Weather() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = 'abb6d752661d09ef39285a02ecf3c597';


    //날씨 정보를 가져오는 함수
    const searchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
            setWeatherData(response.data);
            setError('');
        } catch(error) {
            setWeatherData(null);
            setError('Failed to fetch weather data');
        }
    };

    //엔터키 눌렀을 때 날씨 정보 가져오기
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            searchWeather();
        }
    };

    const clearData = () => {
        setLocation('');
        setError('');
        setWeatherData(null);
    }

  return (
    <div className='weather'>
        <input 
        className='weather_input'
        type="text"
        placeholder='도시를 입력하세요'
        value={location}
        onChange={(e)=> setLocation(e.target.value)} onKeyDown={handleKeyPress} />


        {weatherData && (
            <div className='weather_data'>
                <div className='weather_data__flex'>
                    <h5 className='weather_city'>{weatherData.name}</h5>
                    <div className='container'><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" /></div>
                    <span>{weatherData.weather[0].main}</span>
                </div>
                <h2 className='weather_temp'>{Math.round(((weatherData.main.temp - 273.15) * 10)) / 10}℃</h2>
                <button className='weather_clear' onClick={clearData}>Clear</button>
            </div>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  )
}
