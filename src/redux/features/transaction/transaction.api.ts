import { baseApi } from "@/redux/baseApi";





export const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({





    allTransactions: builder.query({
      query: () => ({
        url: `/transaction/my-transactions`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),








  }),
});

export const {
  useAllTransactionsQuery
} = UserApi;