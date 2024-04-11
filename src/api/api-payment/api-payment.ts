import { appApi } from "../api"
import { IPaymentDTO, IPaymentResponse } from "./data-transfer"

export const paymentApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		// LOGIN USER
		placeOrder: build.mutation<IPaymentResponse, IPaymentDTO>({
			query: (body) => ({
				url: "/payment/place-order",
				method: "Post",
				body,
			}),
		}),
	}),
})
export const { usePlaceOrderMutation } = paymentApi
