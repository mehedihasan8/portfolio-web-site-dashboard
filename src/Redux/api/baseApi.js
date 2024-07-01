import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  // baseUrl:
  // "https://portfolio-website-server-side-production.up.railway.app/api",
  credentials: "include",
  prepareHeaders: (headers) => {
    // const token = getUserInfo();
    const token = "kshfoasdfjkl";

    console.log(token, "token");
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: [],
  refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
});
