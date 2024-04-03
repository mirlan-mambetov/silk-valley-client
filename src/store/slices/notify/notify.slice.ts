import {
	INotifyInitialState,
	INotifyPayload,
} from "@/interfaces/notify.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: INotifyInitialState = {
	isOpen: false,
	text: "Пример текста",
	options: {
		position: "bottomCenter",
		timeOut: undefined,
		backGround: "black",
		size: undefined,
	},
}
export const notifySlice = createSlice({
	name: "notify",
	initialState,
	reducers: {
		openNotifyHandler: (state, { payload }: PayloadAction<INotifyPayload>) => {
			state.isOpen = !state.isOpen
			state.text = payload.text
			state.type = payload.type
			if (payload.options) {
				state.options = payload.options
			}
		},
		closeNotifyHandler: (state) => {
			state.isOpen = false
		},
	},
	extraReducers: (build) => {},
})

export const notifyReducer = notifySlice.reducer
export const notifyActions = notifySlice.actions
