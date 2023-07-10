import React, { useState, useRef } from 'react'
import styles from './styles/CustomDatalist.module.css'

const CustomDatalist = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const inputRef = useRef(null)

  const handleInputChange = event => {
    const input = event.target.value
    setSearchTerm(input)
  }

  const filteredOptions = options.filter(option =>
    option.display_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOptionSelect = option => {
    setSearchTerm('')
    onSelect(option)
    setDropdownOpen(false)
    inputRef.current.blur()
  }

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setDropdownOpen(false)
    }, 200)
  }

  return (
    <div className={styles['custom-datalist']}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={toggleDropdown}
        onBlur={handleBlur}
        placeholder="Search for a type of book"
        ref={inputRef}
        className={styles['custom-datalist-input']}
      />
      {isDropdownOpen && (
        <div className={styles['custom-datalist-dropdown']}>
          <ul className={styles['custom-datalist-options']}>
            {filteredOptions.map(option => (
              <li
                key={option.list_name}
                onClick={() => handleOptionSelect(option)}
                className={styles['custom-datalist-option']}>
                {option.display_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CustomDatalist
