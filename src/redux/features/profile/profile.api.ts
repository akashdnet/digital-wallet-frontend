import { baseApi } from "@/redux/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),






   myTransactions: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 5, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/transaction/my-transactions?${params.toString()}`,
        method: "GET",
        };
        },
        providesTags: ["transactions"],
      }),





    updateProfile: builder.mutation({
    query: ({data}) => {
      return {
        url: `/user/me`,
        method: "PATCH",
        data,
      };
    },
    invalidatesTags: ["USER"],
  }),






    changePassword: builder.mutation({
    query: (data) => {
      return {
        url: `/user/change-password`,
        method: "PATCH",
        data,
      };
    },

  }),

  }),
});

export const {
  useUserInfoQuery,
  useMyTransactionsQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = profileApi;