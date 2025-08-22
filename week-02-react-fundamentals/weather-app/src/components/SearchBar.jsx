import {useState} from "react";
function SearchBar({onSearch}) {
    const [city, setCity] = useState('')
    const handleSearch = async(city) =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_URL}&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            onSearch(data)
        }
        catch(error){
            console.error(error)
        }
    }
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search by city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(city);}
                }}/>
            <button onClick={()=>handleSearch(city)}>Search</button>

        </div>
    )
}
export default SearchBar;