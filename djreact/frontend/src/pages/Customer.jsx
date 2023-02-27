import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Customer() {
    const { id } = useParams()
    const [customer, setCustomer] = useState()
    useEffect(() => {
        console.log(useEffect);
        const url = 'http://127.0.0.1:8000/api/customers/' + id;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            setCustomer(data.customer);
        })
    }, [])
    return (
        <>
            {customer ? <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div>
                : null}

        </>
    )
}
