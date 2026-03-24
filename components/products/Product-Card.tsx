'use client'
import {useGetProductsQuery} from "@/lib/features/product/productApi";

export default function ProductCard() {
    const {data, isLoading, error} = useGetProductsQuery()
    console.log(data)
    return (
        <>
            {isLoading ? <h1>data is fetching</h1> : <h1>data is ready</h1>}
        </>
    )
}