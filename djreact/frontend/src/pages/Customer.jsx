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
                <Link className='btn btn-primary' to="/customers">Go Back</Link>
            </div>
        </>
    )
}
