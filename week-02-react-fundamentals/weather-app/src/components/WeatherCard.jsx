import { useEffect, useState} from "react";
function WeatherCard({data}){
    const [iconPath, setIconPath] = useState('')
    function isDay()
    {
        let now = Math.floor(Date.now() / 1000)
        return now >= data.sys.sunrise && now <= data.sys.sunset
    }

    function setIcon() {
        const day = isDay() ? 'd' : 'n'
        const weatherId = data.weather[0].id
        let iconName = ''
        if (weatherId >= 200 && weatherId <= 232) {
            iconName += '11'
        }
        else if (weatherId >=300 && weatherId <=321) {
            iconName += '09'
        }
        else if (weatherId >=500 && weatherId <= 504) {
            iconName += '10'
        }
        else if (weatherId >=520 && weatherId <= 531) {
            iconName += '09'
        }
        else if ((weatherId >=600 && weatherId <= 622) || (weatherId === 511)) {
            iconName += '13'
        }
        else if (weatherId >=701 && weatherId <= 781) {
            iconName += '50'
        }
        else if (weatherId === 800){
            iconName += '01'
        }
        else if (weatherId === 801){
            iconName += '02'
        }
        else if (weatherId === 802){
            iconName += '03'
        }
        else if (weatherId === 803 || weatherId === 804){
            iconName += '04'
        }
        iconName+=day
        setIconPath(`/icons/${iconName}.png`)
    }

    useEffect(() => {
        if(data) setIcon()

    }, [data]);

    return(
        <div className={`weather-card ${data.weather[0].main.toLowerCase()}`}>
            <h3>{data.name}</h3>
            <img src={iconPath} alt="" className='icon'/>
        </div>
    )
}
export default WeatherCard;