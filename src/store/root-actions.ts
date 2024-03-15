import { cartActions } from "./slices/cart/cart.slice"
import { deliverActions } from "./slices/deliver/deliver.slice"
import { notifyActions } from "./slices/notify/notify.slice"

export const rootActions = {
	...deliverActions,
	...cartActions,
	...notifyActions,
}
