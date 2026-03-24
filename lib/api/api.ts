// create api slice (base url)

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    tagTypes: ['Product'],
    endpoints: () => ({})
})