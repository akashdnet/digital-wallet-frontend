import { baseApi } from "@/redux/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

      // done 
   pendingUser: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 10, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/admin/pending-users?${params.toString()}`,
        method: "GET",
        };
  },
  providesTags: ["pending-users"],
}),





// done 
   userList: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 10, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/admin/user-list?${params.toString()}`,
        method: "GET",
        };
  },
  providesTags: ["user-list"],
}),










   agentList: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 10, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/admin/agent-list?${params.toString()}`,
        method: "GET",
        };
  },
  providesTags: ["user-list"],
}),







// done 
   pendingAgent: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 10, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/admin/pending-agents?${params.toString()}`,
        method: "GET",
        };
  },
  providesTags: ["pending-agents"],
}),




// done 
   allTransition: builder.query<any,{ page?: number; limit?: number; term?: string }>({
    query: ({ page = 1, limit = 10, term = "" }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (term) params.set("term", term);

        return {
        url: `/admin/all-transactions?${params.toString()}`,
        method: "GET",
        };
  },
  providesTags: ["all-transactions"],
}),



// done 
   dashboardOverview: builder.query({
    query: () => {

        return {
        url: `/admin/dashboard-overview`,
        method: "GET",
        };
  },
  providesTags: ["dashboard-overview"],
}),



// done 
  updateWalletStatus: builder.mutation({
    query: ({ userID, status}) => {
      return {
        url: `/admin/update-wallet-status/${userID}`,
        method: "PATCH",
        data: {status},
      };
    },
    invalidatesTags: ["pending-users", "USER", "dashboard-overview", "pending-agents", "user-list"],
  }),




  // done 
  updateUserProfile: builder.mutation({
    query: ({data, userID}) => {
      return {
        url: `/admin/update-user-profile/${userID}`,
        method: "PATCH",
        data,
      };
    },
    invalidatesTags: ["user-list"],
  }),






  // done 
   deleteUser: builder.mutation({
      query: (userID) => ({
        url: `/admin/delete-user/${userID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user-list"],
    }),





  }),
});

export const {
  usePendingUserQuery,
  usePendingAgentQuery,
  useDashboardOverviewQuery,
  useAllTransitionQuery,
  useUpdateWalletStatusMutation,
  useUserListQuery,
  useAgentListQuery,
  useDeleteUserMutation,
  useUpdateUserProfileMutation,
} = profileApi;