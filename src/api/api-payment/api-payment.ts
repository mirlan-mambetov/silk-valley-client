import { apiBase } from "../axios-base"
import { IPaymentDTO, IPaymentResponseWithCard } from "./dto"

export type PlaceOrderResponse = {} & {
	message: string
	orderId: number
	detail_order?: IPaymentResponseWithCard
	notifyId: number
}

export const PaymentApi = {
	/**
	 *
	 * @param data
	 * @returns
	 */
	async placeOrder(data: IPaymentDTO) {
		const response = await apiBase<PlaceOrderResponse>({
			url: "/payment/place-order",
			method: "POST",
			data,
		})
		return response.data
	},

	/**
	 *
	 * @param data
	 * @returns
	 */
	async canceldTransaction(data: { sessionId?: string }) {
		if (data.sessionId) {
			const response = await apiBase<{ message: string }>({
				url: "/payment/canceled-order",
				method: "POST",
				data,
			})
			return response.data
		}
	},
}
