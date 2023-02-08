import React, { useState, useEffect } from 'react'

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State Update', word);
    }, [word]);

    useEffect(() => {
        console.log('State Update', word2);
    }, [word2]);

    // No dependency array --> Update for any state changes
    // Empty dependency array --> execute once
    // Passing in data --> Only execute when those state variables are changed
  return (
      <>
      <div className='py-5 px-5'>
          <input type="text" onChange={(e) => {
              setWord(e.target.value)
          }} />
          <h4 className='py-2'>Let's Get The Definition For {word}</h4>
          
          <input type="text" onChange={(e) => {
              setWord2(e.target.value)
          }} />
          <h4 className='py-2'>Let's Get The Definition For {word2}</h4>
      </div>
      </>
  )
}

export default Dictionary