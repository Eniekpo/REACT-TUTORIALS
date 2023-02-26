import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <div className='flex gap-3 px-12 py-12'> 
                <input type="text" onChange={(e) => {
                    setWord(e.target.value)
                }}
                />
                <button onClick={() => {
                    navigate('/definition/name' + word, {replace: true})
                }} className='text-2xl'>Search</button>
            </div>
        </>
    )
}

export default Dictionary