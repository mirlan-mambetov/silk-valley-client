import { combineReducers } from "@reduxjs/toolkit"
import { deliverReducer } from "./slices/deliver/deliver.slice"

export const rootReducer = combineReducers({
	deliver: deliverReducer,
})
