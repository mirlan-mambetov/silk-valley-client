import { cartActions } from "./slices/cart/cart.slice"
import { deliverActions } from "./slices/deliver/deliver.slice"

export const rootActions = {
	...deliverActions,
	...cartActions,
}
