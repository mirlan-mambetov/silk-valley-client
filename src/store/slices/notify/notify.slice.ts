import { INotifyInitialState } from "@/interfaces/notify.interface"
import { createSlice } from "@reduxjs/toolkit"

const initialState: INotifyInitialState = {
	isOpen: false,
	text: "Пример текста",
}
export const notifySlice = createSlice({
	name: "notify",
	initialState,
	reducers: {
		openNotifyHandler: (state) => {
			state.isOpen = true
		},
		closeNotifyHandler: (state) => {
			state.isOpen = false
		},
	},
	extraReducers: (build) => {},
})

export const notifyReducer = notifySlice.reducer
export const notifyActions = notifySlice.actions
