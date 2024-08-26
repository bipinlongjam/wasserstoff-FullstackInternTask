import React from 'react'

const Forecast = ({title, data}) => {

    

  return (
    <div className="w-full px-4 sm:px-6">
    <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase text-sm sm:text-base'>{title}</p>
    </div>
    <hr className='my-1'/>
    <div className='flex items-center justify-between overflow-x-auto space-x-2 sm:space-x-4'>
        {data.map((d, index)=>(
            <div 
            key={index} 
            className='flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px]'>
                <p className='font-light text-sm sm:text-sm'>{d.title}</p>
                <img src={d.icon}
                    alt="weather icon"
                    className='w-10 sm:w-12 my-1'
                />
                <p className='font=medium text-xs sm:text-base'>{`${d.temp.toFixed()}°`}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Forecast
