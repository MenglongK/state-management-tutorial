'use client'
import {useAppDispatch, useAppSelector} from "@/lib/hook";
import {increment} from "@/lib/features/counter/counterSlice";

export function Increment() {
    // useAppSelector to get data from global state
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <>
            <h1 className="text-xl text-center my-5">Get data from global state <span
                className="text-red-600">{count}</span></h1>
            <button onClick={() => dispatch(increment())} className="mx-auto">
                <h3 className="bg-blue-600 w-fit px-3 py-2.5 rounded-lg">Increment (+)</h3>
            </button>
        </>
    )
}