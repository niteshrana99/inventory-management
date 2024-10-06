import { DashboardMetrics, ExpenseByCategorySummary, NewProduct, Product, User } from '@/types/dashboardaccess.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: 'api',
    tagTypes: ['dashboardMetrics', 'products', 'users', 'Expenses'],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => '/dashboard',
            providesTags: ['dashboardMetrics'],
        }),
        getProducts: build.query<Product[], string | void>({
            query: (search) => ({
                url: '/products',
                params: search ? { search } : {},
            }),
            providesTags: ['products'],
        }),
        createProduct: build.mutation<Product, NewProduct>({
            query: (newProduct) => ({
                url: 'products',
                body: newProduct,
                method: 'POST',
            }),
            invalidatesTags: ['products'],
        }),
        getUsers: build.query<User[], void>({
            query: () => '/users',
            providesTags: ['users'],
        }),
        getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
            query: () => "/expenses",
            providesTags: ["Expenses"],
        }),
    }),
});

export const {
    useGetDashboardMetricsQuery,
    useGetProductsQuery,
    useCreateProductMutation,
    useGetUsersQuery,
    useGetExpensesByCategoryQuery,
} = api;
