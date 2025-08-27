import { baseApi } from "@/redux/baseApi";


export interface TPost {
  id: number
  slug: string
  url: string
  title: string
  content: string
  image: string
  thumbnail: string
  status: string
  category: string
  publishedAt: string
  updatedAt: string
  userId: number
}



export const JPHApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllPost: builder.query<TPost[], unknown>({
      query: () => ({
        url: "/test/posts",
        method: "GET",
      }),
      providesTags: ["JPH"],
    //   transformResponse: (response:any) => response.data,
    }),
  }),
});

export const {
  useGetAllPostQuery,
} = JPHApi;