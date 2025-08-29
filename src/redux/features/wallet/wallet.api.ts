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








  }),
});

export const {
  useSendMoneyMutation
} = UserApi;