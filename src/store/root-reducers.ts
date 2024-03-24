import { combineReducers } from "@reduxjs/toolkit"
import { cartReducer } from "./slices/cart/cart.slice"
import { deliverReducer } from "./slices/deliver/deliver.slice"
import { dialogReducer } from "./slices/dialog/dialog.slice"
import { modalReducer } from "./slices/modal/modal.slice"
import { notifyReducer } from "./slices/notify/notify.slice"

export const rootReducer = combineReducers({
	deliver: deliverReducer,
	cart: cartReducer,
	notify: notifyReducer,
	dialog: dialogReducer,
	modal: modalReducer,
})
