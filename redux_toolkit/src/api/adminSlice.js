import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8000/` }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `accounts/${id}`,
      providesTags:["accounts"],
    }),
    getAllUsers: builder.query({
      query: () => `accounts`,
      // providesTags:["accounts"],
      transformResponse:(res)=>res.sort((a,b)=>b.amount - a.amount)
    }),
    addAccount: builder.mutation({
      query: (amount,id) => ({
        url:"accounts",
        method:"POST",
        body:{amount,id}
      }),
      invalidatesTags:["accounts"]
    }),
    updateAccount: builder.mutation({
      query: ({id,amount}) => ({
        url:`accounts/${id}`,
        method:"PATCH",
        body:{amount}
      }),
      invalidatesTags:["accounts"]
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url:`accounts/${id}`,
        method:"DELETE",
      }),
      invalidatesTags:["accounts"]
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByIdQuery,useAddAccountMutation,useGetAllUsersQuery,useDeleteAccountMutation,useUpdateAccountMutation } = adminApi