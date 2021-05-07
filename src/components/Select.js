import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ReactComponent as AngleDown } from '../icons/angle-down.svg'
import { ReactComponent as Checkmark } from '../icons/checkmark-circle.svg'

export default function Select({ options, selected }) {
  const [selectedOption, setSelectedOption] = useState(selected)

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Button className="p-3.5 flex items-center outline-none focus:outline-none bg-base-dark-2 rounded truncate w-full">
        <AngleDown className="w-5 h-5 fill-current text-white mr-2" />
        {selectedOption}
      </Listbox.Button>
      <Listbox.Options className="bg-base-dark-2 rounded mt-1 overflow-hidden">
        {options.map((option) => (
          <Listbox.Option key={option} value={option}>
            {({ active, selected }) => (
              <li
                className={`p-3.5 flex items-center outline-none focus:outline-none  truncate w-full ${
                  active ? 'bg-base-dark-line' : 'bg-base-dark-2'
                }`}>
                {selected && (
                  <Checkmark className="text-accent-red mr-2 fill-current" />
                )}
                {option}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
