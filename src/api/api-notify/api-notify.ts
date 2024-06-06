import { apiBase } from "../axios-base"

export const NotifyApi = {
	/**
	 *
	 * @param id
	 * @returns NULL
	 */
	async changeExpire(id: number) {
		const response = await apiBase({
			url: `/notify/expire/${id}`,
			method: "POST",
		})
		return response.data
	},
}
