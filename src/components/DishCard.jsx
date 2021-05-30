import React from 'react'
import { Link } from 'react-router-dom'

const DishCard = ({ image, name, price, available }) => {
  return (
    <div className="h-full w-full relative flex sm:flex-col items-center justify-center group sm:px-9">
      <img src={image} alt={name} className="h-3/4 sm:h-auto" />
      <div className="flex flex-col items-center">
        <Link
          to={`/dish/${name}`}
          className="w-36 text-center py-4 hover:text-primary transition duration-100">
          {name}
        </Link>
        <p className="mb-1">$ {price}</p>
        <p className="text-text-gray mb-4">{available} Bowls available</p>
      </div>
      <div className="rounded h-full sm:h-5/6 w-5/6 sm:w-full -z-1 absolute right-0 bottom-0 bg-base-dark-2"></div>
    </div>
  )
}

export default DishCard
