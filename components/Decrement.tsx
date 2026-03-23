'use client'
import {useAppDispatch} from "@/lib/hook";
import {decrement} from "@/lib/features/counter/counterSlice";

export function Decrement() {
    // useAppSelector to get data from global state
    const dispatch = useAppDispatch()
    return (
        <>
            <button onClick={() => {
                dispatch(decrement())
            }} className="mx-auto">
                <h3 className="bg-red-600 w-fit px-3 py-2.5 rounded-lg">Increment (-)</h3>
            </button>
        </>
    )
}