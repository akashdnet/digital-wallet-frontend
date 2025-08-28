import { baseApi } from "@/redux/baseApi";





export const AuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),


    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),


  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
} = AuthApi;