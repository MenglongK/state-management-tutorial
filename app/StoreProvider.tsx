'use client'
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