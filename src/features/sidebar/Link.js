import React from 'react'

import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import './Link.scss'

export default function Link({ to, Icon }) {
  return (
    <NavLink
      exact
      to={to}
      className="my-1 pl-1 py-3 pr-2 2xl:my-3 2xl:pl-3 2xl:py-3 2xl:pr-4  flex justify-center items-center rounded-l relative bg-base-dark-2 group transition duration-200"
      activeClassName="activeNavlink">
      <div
        className={cn(
          'bg-base-dark-2 w-8 h-8 2xl:w-12 2xl:h-12 flex justify-center items-center rounded navLink group-hover:bg-primary duration-200'
        )}>
        <Icon className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current text-primary group-hover:text-white duration-200" />
      </div>
    </NavLink>
  )
}
