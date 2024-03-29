import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { APP_URI } from "./config/api-config"

export const appApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: APP_URI }),
	endpoints: (builder) => ({}),
	tagTypes: ["PRODUCTS", "CATEGORIES"],
})
