/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link, useNavigate, useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';

const Definition = () => {
    const [word, setword] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);

    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'https://httpstat.us/'
        // const url = ''http://127.0.0.1:8000/' + search';

        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/login')
                } else if (response.status === 500) {
                    // setServerError (true);
                }

                if (!response.ok) {
                    setError(true);

                    throw new Error('Something went wrong')
                }
                return response.json()
            })
            .then((data) => {
                setword(data[0].meanings)
            });
        .catch((e) => {
                console.log(e.message);
            })
}, []);

if (setNotFound === true) {
    return (
        <>
            <NotFound />
            <Link to='/dictionary'>Search Another</Link>
        </>
    );
}
return (
    <>
        <div>
            {word
                ? <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.name + ' :'}
                                {meaning.definitions[0].definition}
                            </p>
                        )
                    })}</>
                : null
            }
        </div>
    </>
)
}

export default Definition