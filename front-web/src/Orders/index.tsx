import "./styles.css";
import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { fetchProduct } from "../api";

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products)

    useEffect(() => {
        fetchProduct().then(response => setProducts(response.data)).catch(error => console.log(error))
    },[])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>     
    )
}

export default Orders;