import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "@/lib/features/counter/counterSlice";
import {productApi} from "@/lib/features/product/productApi";

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterSlice.reducer,
            [productApi.reducerPath]: productApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']