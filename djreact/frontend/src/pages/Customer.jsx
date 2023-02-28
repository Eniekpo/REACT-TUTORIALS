import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { baseurl } from '../Shared';

export default function Customer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    useEffect(() => {
        console.log('useEffect');
        const url = baseurl + 'api/customer/' + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    navigate('/404');
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
            });
    }, []);

    return (
        <>
            <div className="container mt-5">
                {customer ? (
                    <div className='px-3'>
                        <p>{customer.id}</p>
                        <p>{customer.name}</p>
                        <p>{customer.industry}</p>
                    </div>
                ) : null}
                <button className='btn btn-secondary mb-2'
                    onClick={(e) => {
                    const url = baseurl + 'api/customers' + id;
                    fetch(url, {method: 'DELETE', headers: {
                        'Content-Type': 'application/json'
                    } })
                        .then((respone) => {
                        if (!respone.ok) {
                            throw new Error('Something went wrong')
                        }
                        navigate('/customers');
                    })
                        .catch((e) => {
                        console.log(e)
                    })
                }} >
                    Delete
                </button>
                <br />
                <Link className='btn btn-primary' to="/customers">Go Back</Link>
            </div>
        </>
    )
}
