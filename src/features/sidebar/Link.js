import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import './Link.scss'

export default function Link({ to, Icon }) {
  return (
    <NavLink
      exact
      to={to}
      className="my-3 pl-3 py-3 pr-6  flex justify-center items-center rounded-l relative bg-base-dark-2 group transition duration-200"
      activeClassName="activeNavlink">
      <div
        className={cn(
          'bg-base-dark-2 w-14 h-14 flex justify-center items-center rounded navLink group-hover:bg-primary duration-200'
        )}>
        <Icon className="w-5 h-5 fill-current text-primary group-hover:text-white duration-200" />
      </div>
    </NavLink>
  )
}
