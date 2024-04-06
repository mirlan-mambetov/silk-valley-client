import {
	clearTokensFromStorage,
	getAccessTokenFromStorage,
	getRefreshTokenFromStorage,
	saveTokensToStorage,
} from "@/helpers/local.storage.helper"
import { IUserTokens } from "@/interfaces/user.interface"
import { logOutUser } from "@/store/slices/auth/auth.slice"
import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"
import { Mutex } from "async-mutex"
import { APP_URI } from "./config/api-config"

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
	baseUrl: APP_URI,
	prepareHeaders: (headers) => {
		const token = getAccessTokenFromStorage()
		if (token) headers.set("Authorization", `Bearer ${token}`)
		return headers
	},
})
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	// wait until the mutex is available without locking it
	await mutex.waitForUnlock()
	let result = await baseQuery(args, api, extraOptions)
	if (result.error && result.error.status === 401) {
		// checking whether the mutex is locked
		if (!mutex.isLocked()) {
			const release = await mutex.acquire()
			const refreshToken = getRefreshTokenFromStorage()
			try {
				const refreshResult = await baseQuery(
					{
						url: "/auth/refresh",
						body: { refreshToken },
						method: "Post",
					},
					api,
					extraOptions
				)
				if (refreshResult.data) {
					saveTokensToStorage(refreshResult.data as IUserTokens)
					result = await baseQuery(args, api, extraOptions)
				} else {
					clearTokensFromStorage()
					api.dispatch(logOutUser())
				}
			} finally {
				release()
			}
		} else {
			// wait until the mutex is available without locking it
			await mutex.waitForUnlock()
			result = await baseQuery(args, api, extraOptions)
		}
	}
	return result
}

export const appApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
	tagTypes: ["PRODUCTS", "CATEGORIES", "USER"],
})
