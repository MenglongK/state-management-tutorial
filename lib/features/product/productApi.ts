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