import { cartActions } from "./slices/cart/cart.slice"
import { deliverActions } from "./slices/deliver/deliver.slice"
import { dialogActions } from "./slices/dialog/dialog.slice"
import { modalActions } from "./slices/modal/modal.slice"
import { notifyActions } from "./slices/notify/notify.slice"
import { userActions } from "./slices/user/user.slice"

export const rootActions = {
	...deliverActions,
	...cartActions,
	...notifyActions,
	...dialogActions,
	...modalActions,
	...userActions,
}
