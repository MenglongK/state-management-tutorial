'use client'
import {productPutData} from "@/lib/data/productPutData";
import {usePutProductsMutation} from "@/lib/features/product/productApi";


export default function UpdateProduct() {
    const [updateProduct, {data, isLoading, error, isSuccess}] = usePutProductsMutation()
    const handleUpdate = async () => {
        try {
            const response = await updateProduct({id: 90, object: productPutData}).unwrap()
            console.log(response)
        } catch (error) {
            console.log("error status: ", error);
        }
    }
    console.log("data", data, "\error status:", error, "\isSuccess status:", isSuccess);
    return (
        <>
            <button onClick={handleUpdate} className="mx-auto">
                <h3 className="bg-green-600 w-fit px-3 py-2.5 rounded-lg">Update Products</h3>
            </button>
        </>
    )
}