import React, { useState, useEffect } from 'react'
import Input from '../components/Input'
import cn from 'classnames'
import Select from '../components/Select'
import DishCard from '../components/DishCard'

//icons
import { ReactComponent as Print } from '../icons/print.svg'
import { ReactComponent as Eren } from '../icons/customers/eren.svg'
import { ReactComponent as Bertold } from '../icons/customers/berutoruto.svg'
import { ReactComponent as Hanji } from '../icons/customers/hanji.svg'
import { ReactComponent as Levi } from '../icons/customers/levi.svg'
import { ReactComponent as Reiner } from '../icons/customers/reiner.svg'
import { ReactComponent as Coin } from '../icons/coin.svg'
import { ReactComponent as Order } from '../icons/order.svg'
import { ReactComponent as Option } from '../icons/option.svg'

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
import SalesRateCard from '../components/SalesRateCard'
import Status from '../components/Status'
import OrderCustomer from '../components/OrderCustomer'
import MostOrderedItem from '../components/MostOrderedItem'
import CircleProgress from '../components/CircleProgress'

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
    orders: 720,
  },
  {
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    available: 11,
    image: dish2,
    orders: 440,
  },
  {
    name: 'Beef dumpling in hot and sour soup',
    price: 2.99,
    available: 16,
    image: dish3,
    orders: 160,
  },
  {
    name: 'Healthy noodle with spinach leaf',
    price: 3.29,
    available: 23,
    image: dish4,
    orders: 220,
  },
  {
    name: 'Hot spicy fried rice with omelet',
    price: 3.49,
    available: 13,
    image: dish5,
    orders: 620,
  },
  {
    name: 'Spicy instant noodle with special omelette',
    price: 3.59,
    available: 17,
    image: dish6,
    orders: 120,
  },
  {
    name: 'Healthy noodle with spinach leaf',
    price: 3.29,
    available: 22,
    image: dish7,
    orders: 60,
  },
  {
    name: 'Hot spicy fried rice with omelet',
    price: 3.49,
    available: 13,
    image: dish8,
    orders: 50,
  },
  {
    name: 'Spicy instant noodle with special omelette',
    price: 3.59,
    available: 17,
    image: dish9,
    orders: 10,
  },
]

const orderReport = [
  {
    name: 'Eren Jaegar',
    menu: 'Salted Pasta with mushroom sauce',
    payment: 125,
    status: 'Preparing',
    icon: <Reiner />,
    bgColor: 'bg-accent-red',
  },
  {
    name: 'Reiner Braunn',
    menu: 'Beef dumping in a Hot and Sour soup',
    payment: 235,
    status: 'Pending',
    icon: <Eren />,
    bgColor: 'bg-secondary',
  },
  {
    name: 'Hanji Zoe',
    menu: 'Hot spicy fried rice with omlete',
    payment: 300,
    status: 'Preparing',
    icon: <Hanji />,
    bgColor: 'bg-primary',
  },
  {
    name: 'Levi Ackerman',
    menu: 'Salted Pasta with mushroom sauce',
    payment: 625,
    status: 'Completed',
    icon: <Levi />,
    bgColor: 'bg-accent-green',
  },
  {
    name: 'Bertold Hzkto',
    menu: 'Soup with mushroom sauce',
    payment: 45,
    status: 'Completed',
    icon: <Bertold />,
    bgColor: 'bg-accent-purple',
  },
]

const salesRate = [
  {
    price: '22,220.00',
    category: 'Total Revenue',
    precentage: '32.32',
    icon: (
      <Coin
        className="text-secondary stroke-current"
        style={{ width: '30px', height: '30px' }}
      />
    ),
  },
  {
    price: '22,320',
    category: 'Total Dish Order',
    precentage: '-12.32',
    icon: (
      <Order
        className="text-primary fill-current p-1"
        style={{ width: '30px', height: '30px' }}
      />
    ),
  },
  {
    price: '3,220',
    category: 'Total Customer',
    precentage: '2.32',
    icon: (
      <Option
        className="text-secondary fill-current p-1"
        style={{ width: '30px', height: '30px' }}
      />
    ),
  },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Hot Dishes')
  const [activeOrderButton, setActiveOrderButton] = useState('Dine In')

  const [random, setRandom] = useState({
    percentage: 0,
    colour: 'hsl(0, 0%, 0%)',
  })

  const generateRandomValues = () => {
    const rand = (n) => Math.random() * n
    setRandom({
      percentage: rand(100),
      colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`,
    })
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-row sm:flex-row space-y-4 sm:space-y-0 justify-between items-center border-b pb-5 border-base-dark-line">
          <div className="flex flex-col">
            <h1>Dashboard</h1>
            <span className="text-lg text-text-lighter">
              Tuesday, 2 Feb 2021
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="grid grid-flow-row gap-5 sm:grid-flow-col sm:gap-4 mb-7">
            {salesRate.map((rate, idx) => (
              <SalesRateCard key={idx} rate={rate} />
            ))}
          </div>
          <div className="flex flex-col bg-base-dark-2 rounded">
            <div className="py-6 px-3 sm:p-6  flex justify-between items-center">
              <h1 className="text-lg">Order Report</h1>
              <button className="flex items-center border rounded border-text-dark p-2 sm:p-3 hover:bg-primary transition duration-200">
                <Option className="fill-current" />
                <span className="ml-2 text-sm sm:text-base"> Filter Order</span>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-6 border-b border-base-dark-line">
              <h3>Customer</h3>
              <h3 className="hidden sm:block">Menu</h3>
              <h3 className="hidden sm:block">Total Payment</h3>
              <h3 className="justify-self-end sm:justify-self-start">Status</h3>
            </div>
            {orderReport.map((customer, idx) => (
              <OrderCustomer key={idx} customer={customer} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col md:justify-between flex-shrink-0 w-full lg:w-4/12 top-0 bg-transparent h-screen p-4 sm:p-6">
        <div className="bg-base-dark-2 rounded p-6 mb-5 md:w-1/2 lg:w-full md:mr-4 lg:mr-0 h-fit">
          <div className="flex justify-between items-center pb-6 border-b border-base-dark-line">
            <h2 className="text-lg">Most Ordered</h2>
            <Select
              options={['Today', 'Tomorrow', 'Yesterday']}
              selected="Today"
            />
          </div>
          <div>
            {dishes.slice(0, 3).map((dish, idx) => (
              <MostOrderedItem key={idx} dish={dish} />
            ))}
          </div>
          <div>
            <Button type="secondary" className="mt-10">
              View All
            </Button>
          </div>
        </div>

        <div className="bg-base-dark-2 rounded p-6 md:w-1/2 lg:w-full md:ml-4 lg:ml-0 h-fit">
          <div className="flex justify-between items-center pb-6 border-b border-base-dark-line mb-7">
            <h2 className="text-lg">Most Ordered</h2>
            <Select
              options={['Today', 'Tomorrow', 'Yesterday']}
              selected="Today"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <CircleProgress percentage={random.percentage} />
            <div className="flex flex-col mt-3 sm:mt-0 sm:ml-5">
              <div className="flex mb-3">
                <div className="w-5 h-5 bg-accent-red rounded-full mr-3 mt-1"></div>
                <div>
                  <p>Dine in</p>
                  <span className="text-sm text-text-light">200 customers</span>
                </div>
              </div>
              <div className="flex mb-3">
                <div className="w-5 h-5 bg-primary rounded-full mr-3 mt-1"></div>
                <div>
                  <p>To Go</p>
                  <span className="text-sm text-text-light">100 customers</span>
                </div>
              </div>
              <div className="flex mb-3">
                <div className="w-5 h-5 bg-accent-blue rounded-full mr-3 mt-1"></div>
                <div>
                  <p>Delivery</p>
                  <span className="text-sm text-text-light">250 customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
