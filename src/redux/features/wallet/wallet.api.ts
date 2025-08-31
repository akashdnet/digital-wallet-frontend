import { baseApi } from "@/redux/baseApi";





export const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({





    sendMoney: builder.mutation({
      query: (data) => ({
        url: `/wallet/send-money`,
        method: "POST",
        data
      }),
      invalidatesTags: ["USER"]
    }),

    topUp: builder.mutation({
      query: (data) => ({
        url: `/wallet/top-up`,
        method: "POST",
        data: {sendTo: data.sendTo, amount: data.amount}
      }),
      invalidatesTags: ["USER"]
    }),


    cashOut: builder.mutation({
      query: (data) => ({
        url: `/wallet/cash-out`,
        method: "POST",
        data: {sendTo: data.sendTo, amount: data.amount}
      }),
      invalidatesTags: ["USER"]
    }),
    
    cashIn: builder.mutation({
      query: (data) => ({
        url: `/wallet/cash-in`,
        method: "POST",
        data: {sendTo: data.sendTo, amount: data.amount}
      }),
      invalidatesTags: ["USER"]
    }),
    status: builder.mutation({
      query: (data) => ({
        url: `/wallet/status`,
        method: "POST",
        data: {id: data.id, status: data.status}
      }),
      invalidatesTags: [ "DASHBOARD_OVERVIEW"]
    }),








  }),
});

export const {
  useSendMoneyMutation,
  useTopUpMutation,
  useCashOutMutation,
  useCashInMutation,
  useStatusMutation
} = UserApi;