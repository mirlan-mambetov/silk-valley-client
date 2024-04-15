import { IUserTokens } from "@/interfaces/user.interface"
import { apiBase } from "../axios-base"
import { IAuthLoginDTO, IAuthRegisterDTO } from "./data-transfer"

export const AuthApi = {
	/**
	 *
	 * @param dto
	 * @returns
	 */
	async loginUser(dto: IAuthLoginDTO) {
		const response = await apiBase<IUserTokens>({
			url: "/auth/login",
			method: "POST",
			data: dto,
		})
		return response.data
	},

	/**
	 *
	 * @param dto
	 * @returns
	 */
	async registerUser(dto: IAuthRegisterDTO) {
		const response = await apiBase<{ message: string; success: boolean }>({
			url: "/auth/register",
			method: "POST",
			data: dto,
		})
		return response.data
	},

	/**
	 *
	 * @param refreshToken
	 * @returns
	 */
	async generateNewTokens(refreshToken: string) {
		const response = await apiBase<IUserTokens>({
			url: "/auth/refresh",
			method: "POST",
			data: { refreshToken },
		})
		return response.data
	},
}
