import React from 'react'
import { ReactComponent as Search } from '../icons/search.svg'
import cn from 'classnames'

const Input = ({
  placeholder,
  label,
  type = 'text',
  name,
  id,
  className,
  inputClassName,
}) => {
  return (
    <div
      className={cn(
        'flex w-full',
        type === 'search' ? 'flex-row' : 'flex-col',
        className
      )}>
      {type === 'search' && (
        <label
          htmlFor={id || name}
          className="flex justify-center items-center py-3 pl-3 pr-1 bg-base-form rounded-l">
          <Search />
        </label>
      )}
      {label && (
        <label htmlFor="name" className="mb-2 text-base">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id || name}
        className={cn(
          'bg-base-form w-full',
          {
            'rounded p-3': type !== 'search',
            'rounded-r py-3 pr-3 pl-2': type === 'search',
          },
          inputClassName
        )}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
