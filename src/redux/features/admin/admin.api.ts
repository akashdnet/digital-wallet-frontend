import { baseApi } from "@/redux/baseApi";





export const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({





    dashboardOverview: builder.query({
      query: () => ({
        url: `/admin/dashboard-overview`,
        method: "GET",
      }),
      providesTags: ["DASHBOARD_OVERVIEW"],
    }),

    updateUserProfileByAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin/update-user-profile`,
        method: "POST",
        data
      }),
      invalidatesTags: [ "DASHBOARD_OVERVIEW"]
    }),

    deleteUserProfileByAdmin: builder.mutation({
      query: (data) => ({
        url: `/admin/delete-user/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: [ "DASHBOARD_OVERVIEW"]
    }),










  }),
});

export const {
  useDashboardOverviewQuery,
  useUpdateUserProfileByAdminMutation,
  useDeleteUserProfileByAdminMutation
} = UserApi;