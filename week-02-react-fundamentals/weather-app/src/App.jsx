//App.jsx
import { useEffect, useState } from 'react'
import WeatherCard from "./components/WeatherCard.jsx";
function App() {
    const [cityWeather, setCityWeather] = useState(null)
    const [error, setError] = useState('')

    function addCityWeather({data, error}) {
        if(error){
            setError(error)
        }
        else{
            setCityWeather(data)
            setError('')
        }
    }
    // Setting default city
    useEffect(() => {
        async function fetchDefaultCity() {
            const defaultCity = "Amsterdam";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${import.meta.env.VITE_API_URL}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setCityWeather(data);
        }
        fetchDefaultCity();
    }, [])
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 2000); // 2 секунды
            return () => clearTimeout(timer); // очищаем таймер при смене ошибки
        }
    }, [error]);
    return (
        <>
            {error && <div className="error-toast">{error}</div>}
            <WeatherCard data={cityWeather} onSearch={addCityWeather} />
        </>
    )
}

export default App;
