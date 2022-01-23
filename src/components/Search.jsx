import React, { useState } from 'react'

export const Search = (props) => {
    const [search, setSearch] = useState('')

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            props.search(search)
        }
    }
    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    className='validate'
                    id='email_inline'
                    type='email'
                    placeholder='Search films'
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    onKeyDown={handleKey}
                ></input>
                <button
                    className='btn search-btn'
                    onClick={() => props.search(search)}
                >
                    Search
                </button>
            </div>
        </div>
    )
}
