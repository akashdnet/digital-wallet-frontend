import { baseApi } from "@/redux/baseApi";





export const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    register: builder.mutation({
      query: (userFormData) => ({
        url: "/user/create",
        method: "POST",
        data: userFormData,
      }),
    }),



    myProfile: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),








  }),
});

export const {
    useRegisterMutation,
  useMyProfileQuery
} = UserApi;