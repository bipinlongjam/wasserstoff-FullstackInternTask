import React from 'react'
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const TempDetails = ({weather:{
    details, 
    icon, 
    temp,
    temp_min, 
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like },
    units,
}) => {

    const verticalDetails = [
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real Feel",
            value:`${feels_like.toFixed()}°`,
        },
        {
            id:2,
            Icon:BiSolidDropletHalf,
            title:"Humidity",
            value:`${humidity.toFixed()}%`,
        },
        {
            id:3,
            Icon:FiWind,
            title:"Wind",
            value:`${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`
        }
    ]

    const horizontalDetails = [
        {
            id:1,
            Icon:GiSunrise,
            title:"Sunrise",
            value:sunrise
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Humidity",
            value:sunset
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:`${temp_max.toFixed()}°`,
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:`${temp_min.toFixed()}°`,
        }

    ]


  return (
    <div className="px-4">
      <div className='flex items-center justify-center py-6 text-lg sm:text-xl text-cyan-300'>
        <p>{details}</p>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between py-3'>
        <img 
        src={icon}
            alt="weather icon"
        className='w-16 sm:w-20'
        />
        <p className="text-4xl sm:text-5xl">{`${temp.toFixed()} ${units === "metric" ? "C" : "F"}°`}</p>

        <div className='flex flex-col space-y-2 sm:space-y-3 items-start mt-4 sm:mt-0'>

            {
                verticalDetails.map(({id, Icon, title, value}) =>(
                    <div 
                    key={id}
                    className='flex font-light text-xs sm:text-sm items-center justify-center'>
                        <Icon size={18} className='mr-1'/>
                        {`${title}:`} <span className='font-medium ml-1'>{value}</span>
                     </div>
                ))
            }
        </div>
      </div>

        <div className='flex flex-col sm:flex-row items-center justify-between sm:justify-center space-y-4 sm:space-y-0 sm:space-x-10 text-xs sm:text-sm py-3'>
            {horizontalDetails.map(({id, Icon, title, value}) =>(
                <div key={id} className='flex flex-row items-center'>
                    <Icon size={30}/>
                    <p className='font-light ml-1'>
                    {`${title}:`} <span className='font-medium ml-1'>{value}</span>
                    </p>
                </div>
            ))}   
        </div>
    </div>
  )
}

export default TempDetails
