import { IUserTokens } from "@/interfaces/user.interface"
import { appApi } from "../api"
import { IUserLoginDTO, IUserRegisterDTO } from "../api-user/data.transfer"

export const authApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		// LOGIN USER
		loginUser: build.mutation<IUserTokens, IUserLoginDTO>({
			query: (body) => ({
				url: "/auth/login",
				method: "Post",
				body,
			}),
		}),
		// LOGIN USER
		registerUser: build.mutation<
			{ message: string; success: boolean },
			IUserRegisterDTO
		>({
			query: (body) => ({
				url: "/auth/register",
				method: "Post",
				body,
			}),
		}),
	}),
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
