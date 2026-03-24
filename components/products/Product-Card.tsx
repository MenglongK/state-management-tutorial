'use client'
import {useGetProductsQuery} from "@/lib/features/product/productApi";

export default function ProductCard() {
    const {data, isLoading, error} = useGetProductsQuery()
    console.log("Data from server: ", data)
    console.log("Error status: ", error)

    return (
        <>
            {isLoading ? <h3>Data is fetching......</h3> : isLoading ? <h3>Data is ready</h3> :
                <h3>Data fetching is fail!!!</h3>}
        </>
    )
}