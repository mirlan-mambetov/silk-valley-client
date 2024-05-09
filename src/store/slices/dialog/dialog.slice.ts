import { IDialogInitial, IDialogPayload } from "@/interfaces/dialog.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: IDialogInitial = {
	dialogContent: { message: "" },
	isActive: false,
	isConfirm: undefined,
	type: "notify",
}
export const dialogSlice = createSlice({
	name: "dialog",
	initialState,
	reducers: {
		openDialogHandler: (state, { payload }: PayloadAction<IDialogPayload>) => {
			state.isActive = true
			state.dialogContent.message = payload.message
			state.type = payload.type
		},
		closeDialogHandler: (state) => {
			state.isActive = false
		},
		isConfirmDialogHandler: (state) => {
			state.isConfirm = true
		},
		isCanceConfirmDialogHandler: (state) => {
			state.isConfirm = false
		},
	},
	extraReducers: (build) => {},
})

export const dialogActions = dialogSlice.actions
export const dialogReducer = dialogSlice.reducer
