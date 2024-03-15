import { INotifyInitialState } from "@/interfaces/notify.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: INotifyInitialState = {
	isOpen: false,
	text: "Пример текста",
}
export const notifySlice = createSlice({
	name: "notify",
	initialState,
	reducers: {
		openNotifyHandler: (
			state,
			{ payload }: PayloadAction<string | undefined>
		) => {
			state.isOpen = !state.isOpen
			state.text = payload
		},
		closeNotifyHandler: (state) => {
			state.isOpen = false
		},
	},
	extraReducers: (build) => {},
})

export const notifyReducer = notifySlice.reducer
export const notifyActions = notifySlice.actions
