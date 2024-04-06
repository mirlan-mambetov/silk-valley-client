import { IUser } from "@/interfaces/user.interface"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserInitialState {
	user: IUser | undefined | null
}

const initialState: IUserInitialState = {
	user: undefined,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, { payload }: PayloadAction<{ data: IUser }>) => {
			state.user = payload.data
		},
		clearUser: (state) => {
			state.user = undefined
		},
	},
	extraReducers: (build) => ({}),
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
