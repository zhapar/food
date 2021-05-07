import React from 'react'
import { ReactComponent as Search } from '../icons/search.svg'
import cn from 'classnames'

const Input = ({ placeholder, type = 'text', name, id }) => {
  return (
    <div className="flex w-full">
      {type === 'search' && (
        <label
          htmlFor={id || name}
          className="flex justify-center items-center py-3 pl-3 pr-1 bg-base-form rounded-l">
          <Search />
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id || name}
        className={cn('bg-base-form w-full', {
          'rounded p-3': type !== 'search',
          'rounded-r py-3 pr-3 pl-2': type === 'search',
        })}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
