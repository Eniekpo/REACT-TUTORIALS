import React, { useEffect, useState } from 'react'

const Customers = () => {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        // console.log('Fetching customers ... ');
        fetch('http://localhost:8000/api/customer/')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setCustomers(data.customers);
            });
    }, []);
    return (
        <div className='container mt-5'>
            <h1 className="display-4">Here are our customers</h1>
            {customers ? customers.map((customer) => {
                return (
                    <div className='fw-bold'>
                        <p>{customers.name}</p>
                        {/* <p>{customers.industry}</p> */}
                    </div>
                );
            }) : null}

        </div>
    )
}

export default Customers