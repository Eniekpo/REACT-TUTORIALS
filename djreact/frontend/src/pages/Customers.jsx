import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseurl } from '../Shared';

export default function Customers() {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        fetch(baseurl + 'api/customers')
            .then((response) => response.json())
            .then((data) => {
                setCustomers(data.customers);
            });
    }, []);

    
    return (
        <>
            <div className='container mt-5'>
                <h1>Here are our customers: </h1>
                <ul>
                {customers
                    ? customers.map((customer) => {
                    return (
                            <li key={customer.id}>
                                <Link className='btn btn-light btn-outline-primary' to={'/customer/' + customer.id}>
                                    {customer.name}
                                </Link>
                            </li>
                    )
                    }) : null}
                  
                </ul>
            </div>
        </>
    );
}
