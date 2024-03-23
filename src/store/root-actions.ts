import { cartActions } from "./slices/cart/cart.slice"
import { deliverActions } from "./slices/deliver/deliver.slice"
import { dialogActions } from "./slices/dialog/dialog.slice"
import { notifyActions } from "./slices/notify/notify.slice"
export const rootActions = {
	...deliverActions,
	...cartActions,
	...notifyActions,
	...dialogActions,
}
