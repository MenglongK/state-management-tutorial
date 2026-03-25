import {fakeStoreApi} from "@/lib/api/api";
import {ProductPost, ProductPut, ProductResponse} from "@/lib/type/products";

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
        }),
        putProducts: builder.mutation<ProductPut, { id: number, object: ProductPut }>({
            query: ({id, object}) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: object
            }),
            invalidatesTags: ['Product']
        }),
        deleteProducts: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        })
    })
})

// export hook for UI call
export const {
    useGetProductsQuery,
    useGetProductsByIdQuery,
    usePostProductsMutation,
    usePutProductsMutation,
    useDeleteProductsMutation,
} = productApi;