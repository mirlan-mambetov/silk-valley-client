import { apiBase } from "../axios-base"
import { IPaymentDTO, IPaymentResponse } from "./data-transfer"

export const PaymentApi = {
	async placeOrder(data: IPaymentDTO) {
		const response = await apiBase<IPaymentResponse>({
			url: "/payment/place-order",
			method: "POST",
			data,
		})
		return response.data
	},
}
