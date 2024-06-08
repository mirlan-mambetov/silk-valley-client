import { authActions } from "./slices/auth/auth.slice"
import { cartActions } from "./slices/cart/cart.slice"
import { filterActions } from "./slices/filter/filter.slice"
import { mapActions } from "./slices/map/map.slice"
import { userActions } from "./slices/user/user.slice"

export const rootActions = {
	...cartActions,
	...userActions,
	...authActions,
	...filterActions,
	...mapActions,
}
