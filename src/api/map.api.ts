import { IDeliverPoint } from "@/interfaces/deliver.interface"
import { apiBase } from "./axios-base"

export const mapApi = {
	async getGoeCode(lat?: number, lng?: number) {
		const response = await apiBase<{ address?: IDeliverPoint }>({
			url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
			method: "GET",
		})
		return response.data
	},
}
