import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (dataInfo) => ({
        url: "/blogs",
        method: "POST",
        body: dataInfo,
      }),
    }),
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/getSingleBlog/${id}`,
        method: "GET",
      }),
    }),
    updateBlog: builder.mutation({
      query: (data) => {
        // console.log(userInfo);
        return {
          url: `/blogs/updateSingleBlog/${data?.id}`,
          method: "PUT",
          body: data?.info,
        };
      },
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/deleteSingleBlog/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} = blogApi;
