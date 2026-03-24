## Tutorial of using Redux Toolkit

#### 1. create store
- **Structure**:
  `project/lib/store.ts`
```
import {configureStore} from "@reduxjs/toolkit";

export const makeStore = ()=>{
return configureStore({
reducer: {}
})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
```

#### 2. create hooks for type safe
- **Structure**:
  `project/lib/hook.ts`

```
import {useDispatch, useSelector, useStore} from "react-redux";
import {AppDispatch, AppStore, RootState} from "@/lib/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>()
```

#### 3. create store provider for next.js project can use global state
- **Structure**:
  `app/StoreProvider.tsx`

```
import React, {useRef} from "react";
import {AppStore, makeStore} from "@/lib/store";
import {Provider} from "react-redux";

export function StoreProvider({children}: {children: React.ReactNode}) {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
        // create the store instance the first time this renders
        storeRef.current = makeStore()
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}
```

#### 4. connect between global store to next.js project
- use `<StoreProvider>` to cover `{children}` of RootLayout
```
export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
<StoreProvider>
<body className="min-h-full flex flex-col">{children}</body>
</StoreProvider>
</html>
);
}
```

#### 5. create reducer and define their responsible
- **Structure**:
  `project/lib/features/counter`

```
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
                        state.value = state.value + 1},
                decrement: (state) => {
                        state.value = state.value - 1}
                }
        })

// export action of reducer for ui can dispatch
export const {increment, decrement} = counterSlice.actions;

// export reducer for register to store
export default counterSlice.reducer;
```

#### 6. UI dispatch and get data from global state
- apply to UI:
```
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
```

# Tutorial of using RTK Query
#### 1. create api slice (store base url)
- **Structure**:
  `project/lib/api/api.ts`
```
// create api slice (base url)

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
reducerPath: "productApi",
baseQuery: fetchBaseQuery({
baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
}),
tagTypes: ["productApi"],
endpoints: () => ({})  // split file of endpoints, so keep it empty
})
```

#### 2. create reducer to handle CRUD or method
##### * Query all data from api
- **Structure**:
  `project/lib/feature/product/productApi.ts`

```
import {fakeStoreApi} from "@/lib/api/api";
import {ProductResponse} from "@/lib/type/products";

export const productApi = fakeStoreApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse[], void>({
            query: () => "products",
        })
    })
})

// export hook for UI call
export const {useGetProductsQuery} = productApi;
```