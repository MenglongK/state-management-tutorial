"use client"

import {useGetProductsByIdQuery} from "@/lib/features/product/productApi";

export default function GetProductById({id}: { id: number }) {
    const {data, isLoading, error, isSuccess} = useGetProductsByIdQuery(id);
    console.log("Data from server: ", data)
    console.log("isLoading status: ", isLoading)
    console.log("Error status: ", error)
    return (
        <>
            {isSuccess ? <h3>Product by id = {id} {data.title}</h3> : isLoading ? <h3>Product fetch is loading...</h3> :
                <h3>Product fetching is fail!!!</h3>}
        </>
    )
}