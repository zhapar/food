import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ReactComponent as AngleDown } from '../icons/angle-down.svg'
import { ReactComponent as Checkmark } from '../icons/checkmark-circle.svg'
import cn from 'classnames'

export default function Select({ options, selected, className }) {
  const [selectedOption, setSelectedOption] = useState(selected)

  return (
    <div>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button
          className={cn(
            'px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center outline-none focus:outline-none bg-base-dark-2 rounded truncate border border-base-dark-line',
            className
          )}>
          <AngleDown className="w-5 h-5 fill-current text-white mr-2" />
          {selectedOption}
        </Listbox.Button>
        <Listbox.Options className="bg-base-dark-2 rounded mt-1 overflow-hidden absolute z-10">
          {options.map((option) => (
            <Listbox.Option key={option} value={option}>
              {({ active, selected }) => (
                <li
                  className={`px-3.5 py-2.5 flex items-center outline-none focus:outline-none cursor-pointer truncate w-full ${
                    active ? 'bg-base-dark-line' : 'bg-base-dark-2'
                  }`}>
                  {selected && <Checkmark className="text-accent-red mr-2" />}
                  {option}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
