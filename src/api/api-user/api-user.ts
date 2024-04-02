import { IAuthResponse } from "@/interfaces/auth.interface"
import { appApi } from "../api"
import { IUserLoginDTO } from "./data.transfer"

export const apiUser = appApi.injectEndpoints({
	endpoints: (build) => ({
		loginUser: build.mutation<IAuthResponse, IUserLoginDTO>({
			query: (body) => ({
				url: "/auth/login",
				method: "Post",
				body,
			}),
		}),
	}),
})

export const { useLoginUserMutation } = apiUser
