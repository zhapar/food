import React from 'react'
import { Link } from 'react-router-dom'

import DishImg from '../images/dish-1.png'
import { ReactComponent as EditIcon } from '../icons/edit.svg'

const CardDishFull = () => {
  return (
    <div>
      <div className="h-fit relative flex flex-col items-center justify-center rounded bg-base-dark-2 pt-5">
        <img src={DishImg} alt="" />
        <Link to="" className="w-36 text-center py-4 transition duration-100">
          Spicy seasoned seafood noodles
        </Link>
        <p className="mb-3 text-text-gray flex items-center justify-center">
          $2.29 <span className="mx-2">•</span> 20 Bowls
        </p>
        <Link className="flex items-center justify-center py-4 bg-primaryOpacity w-full h-full rounded-b text-primary font-semibold tracking-wide hover:bg-primary hover:text-white transition duration-100 px-20">
          <EditIcon className="fill-current mr-2" /> Edit dish
        </Link>
      </div>
    </div>
  )
}

export default CardDishFull
