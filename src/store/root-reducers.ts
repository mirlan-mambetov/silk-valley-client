import { combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "./slices/auth/auth.slice"
import { cartReducer } from "./slices/cart/cart.slice"
import { deliverReducer } from "./slices/deliver/deliver.slice"
import { dialogReducer } from "./slices/dialog/dialog.slice"
import { filterReducer } from "./slices/filter/filter.slice"
import { modalReducer } from "./slices/modal/modal.slice"
import { notifyReducer } from "./slices/notify/notify.slice"
import { userReducer } from "./slices/user/user.slice"

export const rootReducer = combineReducers({
	deliver: deliverReducer,
	cart: cartReducer,
	notify: notifyReducer,
	dialog: dialogReducer,
	modal: modalReducer,
	user: userReducer,
	auth: authReducer,
	filter: filterReducer,
})
