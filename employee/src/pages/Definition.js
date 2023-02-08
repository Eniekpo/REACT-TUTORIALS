import React, { useEffect, useState } from 'react'
import {v4 as uuidv4 } from 'uuid'

const Definition = () => {
    const [word, setword] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/')
            .then((response) => response.json())
            .then((data) => {
                setword(data[0].meanings)
                console.log(data[0].meanings)
            });
    }, []);
    return (
        <>
            <div>
                <h3>Here is a Definition</h3>
                {word ? word.map((meaning) => {
                    return <p key={uuidv4()}>
                        {meaning.name}:
                        {meaning.definitions[0].definition}
                    </p>
                }) : null}
            </div>
        </>
    )
}

export default Definition