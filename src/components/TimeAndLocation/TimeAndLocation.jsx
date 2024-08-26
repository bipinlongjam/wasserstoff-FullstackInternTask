import React from 'react'

// eslint-disable-next-line react/prop-types
const TimeAndLocation = ({weather: {formattedLocalTime, name, country} }) => {
  return (
    <div className="px-4">
      <div className='flex items-center justify-center my-4 sm:my-6'>
        <p className='text-lg sm:text-xl font-light'>
            {formattedLocalTime}
        </p>
      </div>
      <div className='flex items-center justify-center my-2 sm:my-3'>
        <p className='text-2xl sm:text-3xl font-medium'>{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
