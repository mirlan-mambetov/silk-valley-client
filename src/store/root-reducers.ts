import { combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "./slices/auth/auth.slice"
import { cartReducer } from "./slices/cart/cart.slice"
import { deliverReducer } from "./slices/deliver/deliver.slice"
import { filterReducer } from "./slices/filter/filter.slice"
import { userReducer } from "./slices/user/user.slice"

export const rootReducer = combineReducers({
	deliver: deliverReducer,
	cart: cartReducer,
	user: userReducer,
	auth: authReducer,
	filter: filterReducer,
})
