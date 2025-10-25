import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({













  sendMoney: builder.mutation({
    query: (data) => {
      return {
        url: `/wallet/send-money`,
        method: "PATCH",
        data: data,
      };
    },
    invalidatesTags: ["USER",  "transactions" ],
  }),


  cashOut: builder.mutation({
    query: (data) => {
      return {
        url: `/wallet/cash-out`,
        method: "PATCH",
        data: data,
      };
    },
    invalidatesTags: ["USER",  "transactions" ],
  }),


  cashIn: builder.mutation({
    query: (data) => {
      return {
        url: `/wallet/cash-in`,
        method: "PATCH",
        data: data,
      };
    },
    invalidatesTags: ["USER",  "transactions" ],
  }),




  topUp: builder.mutation({
    query: (data) => {
      return {
        url: `/wallet/top-up`,
        method: "PATCH",
        data: data,
      };
    },
    invalidatesTags: ["USER",  "transactions" ],
  }),











  }),
});

export const {
  useSendMoneyMutation,
  useCashOutMutation,
  useCashInMutation,
  useTopUpMutation,
} = walletApi;