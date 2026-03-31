'use client'
import {useDeleteProductsMutation} from "@/lib/features/product/productApi";

export default function DeleteProduct() {
    const [deleteProduct, {data, isLoading, error, isSuccess}] = useDeleteProductsMutation()
    const handleDelete = async () => {
        try {
            const response = await deleteProduct(120).unwrap()
            console.log(response)
        } catch (error) {
            console.log("error status: ", error);
        }
    }
    console.log("data", data, "\error status:", error, "\isSuccess status:", isSuccess);
    return (
        <>
            <button onClick={handleDelete} className="mx-auto">
                <h3 className="bg-red-600 w-fit px-3 py-2.5 rounded-lg">Delete Products</h3>
            </button>
        </>
    )
}