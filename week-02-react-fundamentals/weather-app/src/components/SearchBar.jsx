//SearchBar.jsx
import {useState} from "react";
import './SearchBar.css'
function SearchBar({onSearch}) {
    const [city, setCity] = useState('')
    const handleSearch = async(city) =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_URL}&units=metric`
            const response = await fetch(url)
            if (response.status !== 200) {
                throw new Error('City not found')
            }
            const data = await response.json()
            onSearch({data: data, error:null})
        }
        catch(error){
            onSearch({data: null, error: error.message})
        }
        setCity('')
    }
    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Search by city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(city);
                    }
                }}/>
        </div>
    )
}

export default SearchBar;