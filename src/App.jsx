import { FaReact } from "react-icons/fa"
import TopButtons from "./components/TopButtons/TopButtons"
import Inputs from "./components/Inputs/Inputs"
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation"
import TempDetails from "./components/TempDetails/TempDetails"
import Forecast from "./components/Forecast/Forecast"
import getFormattedWeatherData from "./services/WeatherService"
import { useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const App = () => {

  const [query, setQuery] = useState({q: 'delhi'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null);

  // const getWeather = async () => {

  //   const cityName = query.q ? query.q : "current location"
  //   toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`)

    //  await getFormattedWeatherData({...query, units}).then((data) =>{
    //   toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
    //   setWeather(data)
    // });
    const getWeather = async () => {
      try {
        const cityName = query.q ? query.q : "current location";
        toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    const data = await getFormattedWeatherData({ ...query, units });

      if (data.name) {
        toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
        setWeather(data);
        setError(null); 
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      toast.error("City not found. Please try another location.");
      setError("City not found. Please try another location."); 
      setWeather(null); 
    }
  }
  useEffect(() =>{
    getWeather();
  },[query, units])

  const formatBackground = () =>{
    if(!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === "metric" ? 20 : 60;
    if(weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-400"
  }

  return (
    <div className="w-full overflow-hidden">
    <div className={`mx-auto w-full h-full py-5 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-br shadow-xl shadow-gray-400
   text-white ${formatBackground()}`}>
     <TopButtons setQuery={setQuery}/>
     <Inputs setQuery={setQuery} setUnits={setUnits}/>
    {weather && (
      <>
     <TimeAndLocation weather={weather}/>
     <TempDetails weather={weather} units={units}/>
     <Forecast title="3 hour step forecast" data={weather.hourly}/>
     <Forecast title="daily forecast" data={weather.daily}/>
      </>
    )}

    <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
    </div>
  )
}

export default App
