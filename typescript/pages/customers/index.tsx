import { NextPage, GetStaticProps } from "next";
export const getStaticProps: GetStaticProps = async (context) =>{
    return {
        props: {
            customers: [
                {
                    id: 1,
                    name: "John Smith",
                    industry: "Restaurant"
                },
                {
                    id: 2,
                    name: "Sal Brown",
                    industry: "Tech industry"
                },
            ]
        }
    }
}

const Customers: NextPage = (props) => {
    console.log(props);

    return <h1>Customers</h1>;
};

export default Customers;