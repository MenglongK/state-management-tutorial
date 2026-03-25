"use client"
import {usePostProductsMutation} from "@/lib/features/product/productApi";
import {productPostData} from "@/lib/data/productPostData";

export default function AddProduct() {
    const [addProduct, {data, isLoading, error, isSuccess}] = usePostProductsMutation();
    const handlePost = async () => {
        try {
            const response = await addProduct(productPostData).unwrap()
            console.log(response)
        } catch (error) {
            console.log("error status: ", error);
        }
    }
    console.log("data", data, "\error status:", error, "\isSuccess status:", isSuccess);
    return (
        <>
            <button onClick={handlePost} className="mx-auto">
                <h3 className="bg-blue-600 w-fit px-3 py-2.5 rounded-lg">POST Products</h3>
            </button>
        </>
    )
}