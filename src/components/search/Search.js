import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/search/searchSlice'

import './Search.css'

function Search() {
    const dispatch = useDispatch()
    const { search } = useSelector(state => state.search)
    const { isError, error } = useSelector(state => state.weather)
    const [input, setInput] = useState(search)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searched(input))
    }

    return (
        <div className='location_search_wrapper'>
            <div className='location_search'>
                <h3 className='title'>selected loation: <span>{search === '' ? 'Uttara' : search}</span></h3>
                <form onSubmit={handleSubmit}>
                    <div className='input_group'>
                        <input
                            type='search'
                            placeholder='Search Location'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type='submit'>search</button>
                    </div>
                </form>
            </div>

            {isError &&
                <p className='error'>{error}</p>
            }
        </div>
    )
}

export default Search
