import { IDeliverPoint } from "@/interfaces/deliver.interface"

export const mapApi = {
	async getGoeCode(
		lat: number,
		lng: number
	): Promise<{ address?: IDeliverPoint; errors?: unknown }> {
		let errors
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
			)
			const data = await response.json()
			return { address: data.address }
		} catch (error) {
			errors = error
		}
		return { errors }
	},
}
