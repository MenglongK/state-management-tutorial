import {Increment} from "@/components/Increment";
import {Decrement} from "@/components/Decrement";

export default function Home() {
    return (
        <div className={"grid gap-3"}>
            <Increment/>
            <Decrement/>
        </div>
    )
}
