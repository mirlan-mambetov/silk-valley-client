import { IUser } from "@/interfaces/user.interface"
import { appApi } from "../api"

export const apiUser = appApi.injectEndpoints({
	endpoints: (build) => ({
		// LOGIN USER
		fetchUserProfle: build.query<IUser, null>({
			query: () => ({
				url: "/user/profile",
				method: "Get",
			}),
		}),
	}),
})

export const { useFetchUserProfleQuery } = apiUser
