import React from 'react'
import cn from 'classnames'

const Button = ({
  children,
  type = 'secondary',
  borderColor = 'border-primary',
  onClick,
  width = 'w-full h-fit',
  className,
}) => {
  return (
    <>
      <button
        className={cn(
          'flex justify-center items-center py-2 px-3 rounded border-2 shadow transition duration-150 font-semibold hover:border-primary',
          {
            'bg-primary border-primary hover:opacity-95': type === 'primary',
            [`bg-transparent hover:bg-primary hover:text-white text-primary ${borderColor}`]:
              type === 'secondary',
          },
          width,
          className
        )}
        onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button
