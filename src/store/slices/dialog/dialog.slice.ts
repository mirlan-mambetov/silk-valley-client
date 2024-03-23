import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
	isActive: false,
	dialogContent: { message: "" },
	confirmed: false,
}
export const dialogSlice = createSlice({
	name: "dialog",
	initialState,
	reducers: {
		openDialogHandler: (
			state,
			{ payload }: PayloadAction<{ message: string }>
		) => {
			state.isActive = true
			state.dialogContent.message = payload.message
		},
		closeDialogHandler: (state) => {
			state.isActive = false
			state.dialogContent.message = ""
		},
	},
	extraReducers: (build) => {},
})

export const dialogActions = dialogSlice.actions
export const dialogReducer = dialogSlice.reducer
