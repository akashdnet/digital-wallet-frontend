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


    updateMyProfile: builder.mutation({
      query: (userFormData) => ({
        url: "/user/me",
        method: "POST",
        data: userFormData,
      }),
      invalidatesTags: ["USER"],
    }),






  }),
});

export const {
    useRegisterMutation,
  useMyProfileQuery,
  useUpdateMyProfileMutation,
} = UserApi;