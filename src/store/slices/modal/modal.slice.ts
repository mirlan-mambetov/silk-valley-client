import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReactNode } from "react"

interface IModalInitialState {
	isActive: boolean
	content: {
		children: ReactNode | undefined
	}
}

const initialState: IModalInitialState = {
	isActive: false,
	content: {
		children: undefined,
	},
}
export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModalHandler: (
			state,
			{ payload }: PayloadAction<{ children: ReactNode }>
		) => {
			state.isActive = true
			state.content.children = payload.children
		},
		closeModalHandler: (state) => {
			state.isActive = false
			// state.content.children = undefined
		},
	},
	extraReducers: (build) => {},
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer
