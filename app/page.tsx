import {Increment} from "@/components/Increment";
import {Decrement} from "@/components/Decrement";
import ProductCard from "@/components/products/Product-Card";

export default function Home() {
    return (
        <div className={"grid gap-3"}>
            <Increment/>
            <Decrement/>
            <ProductCard/>
        </div>
    )
}
