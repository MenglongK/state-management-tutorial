import ProductCard from "@/components/products/ProductCard";
import AddProduct from "@/components/products/AddProduct";
import UpdateProduct from "@/components/products/UpdateProduct";

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-1 gap-3 mx-auto text-center">
                {/*<ProductCard/>*/}
                <AddProduct/>
                <UpdateProduct/>
            </div>

        </>
    )
}