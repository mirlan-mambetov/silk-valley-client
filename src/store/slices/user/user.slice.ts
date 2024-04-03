import { IUser } from "@/interfaces/user.interface"
import { createSlice } from "@reduxjs/toolkit"

interface IUserInitialState {
	user: IUser | undefined | null
	isAuthtentificated: boolean
}

const initialState: IUserInitialState = {
	isAuthtentificated: false,
	user: undefined,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (build) => ({}),
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
