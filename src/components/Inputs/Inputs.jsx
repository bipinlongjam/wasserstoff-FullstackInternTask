import React, { useState } from 'react'
import { BiCurrentLocation, BiSearch } from 'react-icons/bi'

const Inputs = ({setQuery, setUnits}) => {

  const [city, setCity] = useState('')
  const [unit, setUnit] = useState('metric')
  const handleSearchClick = () =>{
    if(city !== "") setQuery({q: city})
  }

  const handleLocationClick = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
        const {latitude, longitude} = position.coords
        setQuery({lat: latitude, lon: longitude})
      })
    }
  }

  const toggleUnits = () => {
    if (unit === 'metric') {
      setUnits('imperial')
      setUnit('imperial')
    } else {
      setUnits('metric')
      setUnit('metric')
    }
  }



  return (
    <div className='flex flex-col md:flex-row justify-center my-6 space-y-4 md:space-y-0 md:space-x-4'>
        <div className='flex flex-row w-full md:w-3/4 items-center justify-center space-x-2 md:space-x-4'>
      <input 
      value={city}
      onChange={(e)=> setCity(e.currentTarget.value)}
      type='text' 
      placeholder='Search by city name'
      className='text-gray-500 text-base md:text-xl font-light p-2 w-full shadow-xl rounded-md
      capitalize focus:outline-none placeholder:lowercase'
      />
      <BiSearch 
      size={30} 
      className='"cursor-pointer transition ease-out hover:scale-110 md:hover:scale-125'
      onClick={handleSearchClick}
      />
      <BiCurrentLocation 
       size={30} 
       className='cursor-pointer transition ease-out hover:scale-110 md:hover:scale-125'
      onClick={handleLocationClick}
       />
    </div>
    <div className="flex items-center justify-center">
        <div
          className="flex border-2 border-gray-500 rounded-full overflow-hidden"
          onClick={toggleUnits}
        >
          <button
            className={`px-4 py-2 font-medium transition ease-out ${
              unit === 'metric' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-500'
            }`}
          >
            °C
          </button>
          <button
            className={`px-4 py-2 font-medium transition ease-out ${
              unit === 'imperial' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-500'
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  )
}

export default Inputs
