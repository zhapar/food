import React, { useState } from 'react'
import Input from '../components/Input'
import cn from 'classnames'
import Select from '../components/Select'
import DishCard from '../components/DishCard'
import { UilShoppingCart, UilArrowLeft } from '@iconscout/react-unicons'

import dish1 from '../images/dish-1.png'
import dish2 from '../images/dish-2.png'
import dish3 from '../images/dish-3.png'
import dish4 from '../images/dish-4.png'
import dish5 from '../images/dish-5.png'
import dish6 from '../images/dish-6.png'
import dish7 from '../images/dish-7.png'
import dish8 from '../images/dish-8.png'
import dish9 from '../images/dish-9.png'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

const tabs = [
  'Hot Dishes',
  'Cold Dishes',
  'Soup',
  'Grill',
  'Appetizer',
  'Dessert',
]

const dishes = [
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    image: dish1,
  },
  {
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    available: 11,
    image: dish2,
  },
  {
    name: 'Beef dumpling in hot and sour soup',
    price: 2.99,
    available: 16,
    image: dish3,
  },
  {
    name: 'Healthy noodle with spinach leaf',
    price: 3.29,
    available: 23,
    image: dish4,
  },
  {
    name: 'Hot spicy fried rice with omelet',
    price: 3.49,
    available: 13,
    image: dish5,
  },
  {
    name: 'Spicy instant noodle with special omelette',
    price: 3.59,
    available: 17,
    image: dish6,
  },
  {
    name: 'Healthy noodle with spinach leaf',
    price: 3.29,
    available: 22,
    image: dish7,
  },
  {
    name: 'Hot spicy fried rice with omelet',
    price: 3.49,
    available: 13,
    image: dish8,
  },
  {
    name: 'Spicy instant noodle with special omelette',
    price: 3.59,
    available: 17,
    image: dish9,
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Hot Dishes')
  const [activeOrderButton, setActiveOrderButton] = useState('Dine In')

  const [orderTab, setOrderTab] = useState(false)

  console.log(orderTab)
  return (
    <div className="flex">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
          <div className="flex flex-col text-center sm:text-left">
            <h1>Jaegar Resto</h1>
            <span className="text-lg text-text-lighter">
              Tuesday, 2 Feb 2021
            </span>
          </div>
          <div className="block w-64">
            <Input
              placeholder="Search for food, coffee, etc..."
              type="search"
              className="text-base"
            />
          </div>
          <div
            className="absolute left-60 p-2 bg-base-dark-2 rounded sm:hidden"
            onClick={() => setOrderTab(true)}>
            <UilShoppingCart />
          </div>
        </div>
        <div className="flex space-x-8 border-b border-base-dark-line mt-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              className={cn('relative py-3 cursor-pointer hover:text-primary', {
                'text-primary': tab === activeTab,
              })}
              onClick={() => setActiveTab(tab)}>
              {tab}
              {tab === activeTab && (
                <div className="absolute -bottom-0.5 w-9 bg-primary h-1 rounded-full "></div>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex justify-between">
            <h2>Choose Dishes</h2>
            <div>
              <Select
                options={['Dine In', 'To Go', 'Delivery']}
                selected="Dine In"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-7 mt-6">
            {dishes.map((dish, idx) => (
              <div>
                <DishCard {...dish} key={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          'fixed right-0  flex flex-col flex-shrink-0 sm:w-4/12 sm:sticky top-0 bg-base-dark-2 h-screen p-6 transform w-full transition-transform duration-300',
          {
            'translate-x-full sm:translate-x-0': orderTab === false,
            'translate-x-0': orderTab === true,
          }
        )}>
        <div className="flex">
          <UilArrowLeft />
          <h2>Orders #34562</h2>
        </div>
        <div className="flex space-x-3 mt-6">
          {['Dine In', 'To Go', 'Delivery'].map((btn) => (
            <Button
              borderColor="border-base-dark-line"
              type={btn === activeOrderButton ? 'primary' : 'secondary'}
              onClick={() => setActiveOrderButton(btn)}>
              {btn}
            </Button>
          ))}
        </div>
        <div className="flex w-full space-x-4 my-6 pb-6 border-b border-base-dark-line pr-2">
          <div className="flex justify-between flex-grow">
            <span className="text-lg font-semibold">Item</span>
            <span className="text-lg font-semibold mr-3.5">Qty</span>
          </div>
          <div className="flex w-12">
            <span className="text-lg font-semibold">Price</span>
          </div>
        </div>
        <div className="flex flex-col space-y-6 overflow-auto pr-2 pb-2 ">
          {dishes.map((dish, idx) => (
            <div>
              <CartItem {...dish} key={idx} />
            </div>
          ))}
        </div>
        <div className="flex flex-col border-t border-base-dark-line">
          <div className="flex justify-between mt-6">
            <span className="text-text-light">Discount</span>
            <span className="font-medium text-lg">$ 0</span>
          </div>
          <div className="flex justify-between mt-5">
            <span className="text-text-light">Sub total</span>
            <span className="font-medium text-lg">$ 21.03</span>
          </div>
        </div>
        <Button type="primary" className="mt-10">
          Continue to Payment
        </Button>
      </div>
    </div>
  )
}
