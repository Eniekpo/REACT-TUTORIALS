import { NextPage } from "next";
import { useRouter } from "next/router";

const Order: NextPage = () => {
    const router = useRouter();
    const { orderid, id } = router.query;

    return <h1>Order {orderid} from customer {id}</h1>;
};

export default Order;