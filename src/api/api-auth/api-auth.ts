import { IUserTokens } from "@/interfaces/user.interface"
import { appApi } from "../api"
import { IUserLoginDTO } from "../api-user/data.transfer"

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
	}),
})

export const { useLoginUserMutation } = authApi

// interface ILoginResponse {
// 	data?: IAuthResponse
// 	error?: AxiosError
// }
// export const authApi = {
// 	login: async (data: IUserLoginDTO): Promise<ILoginResponse> => {
// 		try {
// 			const response = await axiosBase<IAuthResponse>({
// 				url: "/auth/login",
// 				method: "Post",
// 				data,
// 			})
// 			return { data: response.data }
// 		} catch (error) {
// 			return { error: error as AxiosError }
// 		}
// 	},
// }
