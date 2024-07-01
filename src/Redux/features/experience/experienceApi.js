import { baseApi } from "../../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createExperience: builder.mutation({
      query: (userInfo) => ({
        url: "/experience/createExperience",
        method: "POST",
        body: userInfo,
      }),
    }),
    getExperience: builder.query({
      query: () => ({
        url: "/experience/getExperience",
        method: "GET",
      }),
    }),
    getSingleExperience: builder.query({
      query: (id) => ({
        url: `/experience/getSingleExperience/${id}`,
        method: "GET",
      }),
    }),
    updateExperience: builder.mutation({
      query: (data) => ({
        url: `/experience/updateSingleExperience/${data?.id}`,
        method: "PUT",
        body: data?.info,
      }),
    }),
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experience/deleteExperience/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useDeleteExperienceMutation,
  useGetExperienceQuery,
  useGetSingleExperienceQuery,
  useUpdateExperienceMutation,
} = experienceApi;
