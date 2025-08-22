import { useEffect, useState } from 'react'
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
function App() {
    const [cityWeather, setCityWeather] = useState(null)

    function addCityWeather(data) {
        setCityWeather(data)
        console.log(data)
    }

    return (
        <>
            <SearchBar onSearch={addCityWeather}/>
            {cityWeather ? <WeatherCard data={cityWeather}/> : null}
        </>
    )
}

export default App;
