import {fakeStoreApi} from "@/lib/api/api";
import {ProductPost, ProductResponse} from "@/lib/type/products";

export const productApi = fakeStoreApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse[], void>({
            query: () => "products",
        }),
        getProductsById: builder.query<ProductResponse, number>({
            query: (id) => `products/${id}`
        }),
        postProducts: builder.mutation<ProductPost, object>({
            query: (newProduct: ProductPost) => ({
                url: 'products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ['Product'],
        })
    })
})

// export hook for UI call
export const {useGetProductsQuery, useGetProductsByIdQuery, usePostProductsMutation} = productApi;