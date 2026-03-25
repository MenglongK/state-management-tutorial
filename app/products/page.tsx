import ProductCard from "@/components/products/ProductCard";
import AddProduct from "@/components/products/AddProduct";

export default function Page() {
    return (
        <>
            <div className="mx-auto"><ProductCard/></div>
            <AddProduct/>
        </>
    )
}