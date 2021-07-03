import React, { useState } from 'react'
import Input from '../components/Input'
import cn from 'classnames'
import Select from '../components/Select'
import DishCard from '../components/DishCard'
import {
  UilShoppingCart,
  UilArrowLeft,
  UilPlus,
} from '@iconscout/react-unicons'
// import { ReactComponent as Add } from '../icons/add.svg'

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
import Card from '../components/Card'

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
  const [card, setCard] = useState('card')

  const [orderTab, setOrderTab] = useState(false)
  const [confirmPayment, setConfirmPayment] = useState(false)

  console.log(orderTab)
  return (
    <div className="flex">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center relative">
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
              inputClassName="text-base"
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
          'fixed right-0 flex flex-col flex-shrink-0 sm:w-4/12 sm:sticky top-0 bg-base-dark-2 h-screen p-6 transform w-full transition-transform duration-300',
          {
            'translate-x-full sm:translate-x-0': !orderTab,
            'translate-x-0': orderTab,
          }
        )}>
        <div className="flex items-center">
          <UilArrowLeft onClick={() => setOrderTab(false)} />
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
        <Button
          type="primary"
          className="mt-10"
          onClick={() => setConfirmPayment(true)}>
          Continue to Payment
        </Button>
      </div>
      <div
        className={cn('fixed right-0 top-0 z-10 w-screen h-screen', {
          'pointer-events-none': !confirmPayment,
          // 'translate-x-0': confirmPayment,
        })}>
        <div
          className={cn(
            'w-full h-full bg-black bg-opacity-70 transition-opacity',
            {
              'opacity-0': !confirmPayment,
              'opacity-100': confirmPayment,
            }
          )}
          onClick={() => setConfirmPayment(false)}></div>
        <div
          className={cn(
            'flex bg-base-dark-2 rounded-l-md absolute right-0 top-0 transform transition-transform duration-300',
            {
              'translate-x-full': !confirmPayment,
              'translate-x-0': confirmPayment,
            }
          )}>
          <div className="hidden sm:flex flex-col h-screen p-6 border-r border-base-dark-line">
            <UilArrowLeft
              className="w-6 h-10 text-left cursor-pointer"
              onClick={() => setConfirmPayment(false)}
            />
            <div className="flex justify-between border-b border-base-dark-line py-4 mb-4">
              <div className="flex flex-col">
                <h1>Confirmation</h1>
                <p className="text-text-light">Orders #34562</p>
              </div>
              <Button type="primary" width="w-12 h-12" className="mt-3">
                <UilPlus className="w-4 h-4 2xl:w-5 2xl:h-5" />
              </Button>
            </div>
            <div className="flex flex-col space-y-6 overflow-auto pr-2 pb-2">
              {dishes.map((dish, idx) => (
                <div>
                  <CartItem {...dish} key={idx} />
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-4 border-t border-base-dark-line">
              <div className="flex justify-between mt-6">
                <span className="text-text-light">Discount</span>
                <span className="font-medium text-lg">$ 0</span>
              </div>
              <div className="flex justify-between mt-5">
                <span className="text-text-light">Sub total</span>
                <span className="font-medium text-lg">$ 21.03</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-screen sm:w-auto h-screen p-6">
            <UilArrowLeft
              className="w-6 h-10 text-left cursor-pointer sm:hidden"
              onClick={() => setConfirmPayment(false)}
            />
            <div className="flex flex-col sm:mt-4 border-b border-base-dark-line py-4">
              <h1>Payment</h1>
              <p className="text-text-light">3 payment method available</p>
            </div>
            <div className="flex flex-col mt-4 h-full">
              <h2>Payment Method</h2>
              <div className="flex space-x-2 mt-3">
                {['card', 'paypal', 'cash'].map((cardType, idx) => (
                  <Card
                    type={cardType}
                    active={card === cardType}
                    key={idx}
                    onClick={() => setCard(cardType)}
                  />
                ))}
              </div>
              <Input
                placeholder="Levi Ackerman"
                label="Cardholder Name"
                className="mt-4"
              />
              <Input
                placeholder="2564 1421 0897 1244"
                label="Card Number"
                className="mt-4"
              />
              <div className="flex space-x-2 border-b border-base-dark-line pb-4">
                <Input
                  placeholder="02/2022"
                  label="Expiration Date"
                  className="mt-4"
                />
                <Input
                  placeholder="•••"
                  type="password"
                  label="CVV"
                  className="mt-4"
                  inputClassName="text-lg"
                />
              </div>
              <div className="flex mt-4 space-x-2">
                <div className="flex flex-col w-full">
                  <p className="mb-2 text-base">Order Type</p>
                  <Select
                    options={['Dine In', 'To Go', 'Delivery']}
                    selected="Dine In"
                    className="w-full text-lg h-12"
                  />
                </div>
                <Input placeholder="140" label="Table no." />
              </div>
              <div className="flex mt-auto space-x-2">
                <Button onClick={() => setConfirmPayment(false)}>Cancel</Button>
                <Button type="primary">Confirm Payment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
