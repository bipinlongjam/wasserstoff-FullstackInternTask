import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id:1,
            name:"Delhi"
        },
        {
            id:2,
            name:"London"
        },
        {
            id:3,
            name:"New York"
        },
        {
            id:4,
            name:"Paris"
        }
    ]
  return (
    <div className='flex flex-wrap items-center justify-between gap-2 my-6'>
        {cities.map((city) => (
            // eslint-disable-next-line react/jsx-key
            <button 
            key={city.id}
             className="text-sm sm:text-base md:text-lg font-medium hover:bg-gray-700/20 px-3 py-1 sm:px-4 sm:py-2 rounded-md transition ease-in"
            onClick={()=> setQuery({q:city.name})}
                 >{city.name}
            </button>
            ))}
    </div>
  )
}

export default TopButtons
