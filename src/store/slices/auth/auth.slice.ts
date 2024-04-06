import { createSlice } from "@reduxjs/toolkit"

interface IAuthInitialState {
	isAuthentificated: boolean
	loading: boolean
}
const initialState: IAuthInitialState = {
	isAuthentificated: false,
	loading: false,
}
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginPending: (state) => {
			state.loading = true
			state.isAuthentificated = false
		},
		loginSuccess: (state) => {
			state.loading = false
			state.isAuthentificated = true
		},
		loginRejected: (state) => {
			state.loading = false
			state.isAuthentificated = false
		},
		logOutUser: (state) => {
			state.isAuthentificated = false
			state.loading = false
		},
	},
	extraReducers: (build) => {},
})
export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
export const { logOutUser } = authActions
