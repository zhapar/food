import React, { useState } from 'react'
import cn from 'classnames'

// ICONS
import { ReactComponent as CardIcon } from '../icons/card.svg'
import { ReactComponent as CheckIcon } from '../icons/checkmark-circle.svg'
import { ReactComponent as PayPalIcon } from '../icons/paypal.svg'
import { ReactComponent as Wallet } from '../icons/wallet.svg'

const Card = ({ type, active = false, onClick }) => {
  return (
    <div
      className={cn(
        'relative w-110 h-70 text-sm  flex flex-col items-center justify-center rounded cursor-pointer hover:bg-base-dark-1 border-2 font-medium ',
        {
          'border-white text-white bg-base-dark-1': active,
          'border-base-dark-line text-text-light bg-base-dark-2': !active,
        }
      )}
      onClick={onClick}>
      <CheckIcon
        className={cn('absolute right-2 top-2', {
          'opacity-0': !active,
          'opacity-100': active,
        })}
      />
      <span className="mb-2">
        {type === 'paypal' ? (
          <PayPalIcon className="stroke-current" />
        ) : type === 'card' ? (
          <CardIcon className="fill-current" />
        ) : (
          <Wallet className="fill-current" />
        )}
      </span>
      <span>{type === 'paypal' ? 'PayPal' : 'Credit Card'}</span>
    </div>
  )
}

export default Card
