import React from 'react'
import DishImg from '../images/dish-1.png'
import Input from './Input'
import { ReactComponent as Trash } from '../icons/trash.svg'

export default function CartItem() {
  return (
    <div className="flex space-x-4 w-full">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center mb-2.5 justify-between">
          <div className="flex space-x-2">
            <img src={DishImg} alt="" className="w-11" />
            <div className="flex flex-col justify-between max-w-120">
              <p className="text-white text-base truncate">
                Spicy seasoned seafood noodles
              </p>
              <span className="text-sm text-text-gray">$ 2.29</span>
            </div>
          </div>
          <div className="text-lg text-white bg-base-form w-12 h-12 flex justify-center items-center rounded font-medium">
            2
          </div>
        </div>
        <Input placeholder="Order Note" className="h-12" />
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-white text-lg flex justify-center items-center w-12 h-12 font-medium">
          $ 4,58
        </span>
        <button className="h-12 w-12 bg-transparent border border-primary rounded box-border flex justify-center items-center group hover:bg-primary">
          <Trash className="fill-current text-primary group-hover:text-white" />
        </button>
      </div>
    </div>
  )
}
