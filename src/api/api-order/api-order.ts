import { IOrder } from "@/interfaces/order.interface"
import { apiBase } from "../axios-base"

export const OrderApi = {
	/**
	 * @returns ORDER
	 */
	async fetchOrder(id: number) {
		const response = await apiBase<IOrder>({
			url: `/order/${id}`,
			method: "GET",
		})
		return response.data
	},
	/**
	 * @returns ORDER
	 */
	async fetchOrders() {
		const response = await apiBase<IOrder[]>({
			url: "/order",
			method: "GET",
		})
		return response.data
	},
}
