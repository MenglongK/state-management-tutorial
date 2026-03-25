import AddProduct from "@/components/products/AddProduct";
import UpdateProduct from "@/components/products/UpdateProduct";
import DeleteProduct from "@/components/products/DeleteProduct";
import ProductCard from "@/components/products/ProductCard";

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-1 gap-3 mx-auto text-center">
                {/*<ProductCard/>*/}
                <AddProduct/>
                <UpdateProduct/>
                <DeleteProduct/>
            </div>

        </>
    )
}