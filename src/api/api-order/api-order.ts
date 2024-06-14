import { IOrder } from "@/interfaces/order.interface"
import { apiBase } from "../axios-base"

export const OrderApi = {
	/**
	 * @returns ORDER
	 */
	async fetchOrder(orderId: number) {
		const response = await apiBase<IOrder>({
			url: `/order/${orderId}`,
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
