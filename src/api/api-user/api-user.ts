import { IUser } from "@/interfaces/user.interface"
import { apiBase } from "../axios-base"

export const UserApi = {
	/**
	 * @returns USER
	 */
	async fetchUserProfile() {
		const response = await apiBase<IUser>({
			url: "/user/profile",
			method: "GET",
		})
		return response.data
	},
}
