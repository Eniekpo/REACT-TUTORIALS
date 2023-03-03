import axios from "axios";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { MongoClient, ObjectId } from 'mongodb'
type Customer = {
    _id: ObjectId,
    name: string,
    industry: string
}
type GetCustomerRespone = {
    customers: Customer[]
}
export const getStaticProps: GetStaticProps = async (context) => {
    const mongoClient = new MongoClient('mongodb+srv://eniekpo:Ebimene123@cluster0.jpcqg0u.mongodb.net/Customers?retryWrites=true&w=majority')

    // const result = await axios.get<GetCustomerRespone>('http://127.0.0.1:8000/api/customers')
    
    const data = await mongoClient.db().collection('Customers').find({}).toArray();
    console.log('!!!', data);

    return {
        props: {
            customers: JSON.parse(JSON.stringify(data)),
        },
    };
};

const Customers: NextPage = ({ customers }: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(customers);

    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer: Customer) => {
                return (
                    <div key={customer._id.toString()}>
                        <p>{customer._id.toString()}</p>
                        <p>{customer.name}</p>
                        <p>{customer.industry}</p>
                    </div>
                );
            })}
        </>
    );

}
export default Customers;