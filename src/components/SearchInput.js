import React from 'react'

const SearchInput = ({value,onChange}) => {
  return (
    <div>
        <input 
            type='text'
            placeholder='Search for restaurant...'
            value={value}
            onChange={onChange}
            className='mt-10 border-2 border-slate-900 rounded w-80 p-1'
        />
    </div>
  )
}

export default SearchInput