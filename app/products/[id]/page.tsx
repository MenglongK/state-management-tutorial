import GetProductById from "@/components/products/GetProductById";
import {use} from "react";

export default function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = use(params);
    return (
        <>
            <GetProductById id={id}/>
        </>
    )
}