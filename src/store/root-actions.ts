import { authActions } from "./slices/auth/auth.slice"
import { cartActions } from "./slices/cart/cart.slice"
import { deliverActions } from "./slices/deliver/deliver.slice"
import { filterActions } from "./slices/filter/filter.slice"
import { mapActions } from "./slices/map/map.slice"
import { userActions } from "./slices/user/user.slice"

export const rootActions = {
	...deliverActions,
	...cartActions,
	...userActions,
	...authActions,
	...filterActions,
	...mapActions,
}
