import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

// Define initialState
const initialState: CounterState = {
    value: 0,
}
// Slice is reducer (shopkeeper) that control state and action
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
})

// export action of reducer for ui can dispatch
export const {increment, decrement} = counterSlice.actions;

// export reducer for register to store
export default counterSlice.reducer;