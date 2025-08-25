import { useEffect, useState} from "react";
import SearchBar from "./SearchBar.jsx";
import './WeatherCard.css'
function WeatherCard({data, onSearch}){
    const [iconPath, setIconPath] = useState('')
    useEffect(() => {
        // Update the weather icon whenever the data changes
        if(data) setIcon()
    }, [data]);

    // Loading
    if (!data) return (
        <div className="weather-card">
            <SearchBar onSearch={onSearch}/>
            <p>Enter city name or wait...</p>
        </div>
    )

    // Checks whether it is currently day or night based on sunrise and sunset
    function isDay()
    {
        let now = Math.floor(Date.now() / 1000)
        return now >= data.sys.sunrise && now <= data.sys.sunset
    }

    // Returns a CSS class based on weather type and time of day
    function getWeatherClass(weather, isDay) {
        switch (weather.toLowerCase()) {
            case "clear":
                return isDay ? "clear-day" : "clear-night";
            case "clouds":
                return "clouds";
            case "thunderstorm":
                return "thunderstorm";
            case "drizzle":
                return "drizzle";
            case "rain":
                return "rain";
            case "snow":
                return "snow";
            case "mist":
            case "smoke":
            case "haze":
            case "dust":
            case "fog":
            case "sand":
            case "ash":
            case "squall":
            case "tornado":
                return "foggy";
            default:
                return isDay ? "clear-day" : "clear-night";
        }
    }
    // Determines the path of the weather icon based on weather.id and time of day
    function setIcon() {
        const day = isDay() ? 'd' : 'n'
        const weatherId = data.weather[0].id
        let iconName = ''
        if (weatherId >= 200 && weatherId <= 232) iconName += '11'
        else if (weatherId >=300 && weatherId <=321) iconName += '09'
        else if (weatherId >=500 && weatherId <= 504) iconName += '10'
        else if (weatherId >=520 && weatherId <= 531) iconName += '09'
        else if ((weatherId >=600 && weatherId <= 622) || (weatherId === 511)) iconName += '13'
        else if (weatherId >=701 && weatherId <= 781) iconName += '50'
        else if (weatherId === 800) iconName += '01'
        else if (weatherId === 801) iconName += '02'
        else if (weatherId === 802) iconName += '03'
        else if (weatherId === 803 || weatherId === 804) iconName += '04'
        iconName+=day
        setIconPath(`/icons/${iconName}.png`)
    }

    return(
        <div className={`weather-card ${getWeatherClass(data?.weather?.[0]?.main || "", isDay())}`}>
            <SearchBar onSearch={onSearch} />
            <h1>{data.name}</h1>
            <img src={iconPath || null} alt="" className='icon'/>
            <div>
                <h1>{Math.round(data.main.temp)}°C</h1>
                <span>{data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)}</span>
            </div>
            <div className="additional-info">
                <div className="info-column">
                    <span>Wind</span>
                    <h2>{data.wind.speed.toFixed(2)}kmh</h2>
                </div>
                <div className="info-column">
                    <span>Humidity</span>
                    <h2>{data.main.humidity}%</h2>
                </div>
                <div className="info-column">
                    <span>Feels like</span>
                    <h2>{Math.round(data.main.feels_like)}°C</h2>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard;