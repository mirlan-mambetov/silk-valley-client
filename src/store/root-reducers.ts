import { combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "./slices/auth/auth.slice"
import { cartReducer } from "./slices/cart/cart.slice"
import { filterReducer } from "./slices/filter/filter.slice"
import { mapReducers } from "./slices/map/map.slice"
import { userReducer } from "./slices/user/user.slice"

export const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	auth: authReducer,
	filter: filterReducer,
	map: mapReducers,
})
