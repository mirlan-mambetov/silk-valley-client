import { IDeliverPoint } from "@/interfaces/deliver.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IDeliverInitialState {
	address: IDeliverPoint
}

const initialState: IDeliverInitialState = {
	address: {},
}

export const deliverSlice = createSlice({
	name: "deliver",
	initialState,
	reducers: {
		addDeliverAddress: (state, { payload }: PayloadAction<IDeliverPoint>) => {
			state.address = payload
		},
	},
	extraReducers: (build) => {},
})

export const deliverReducer = deliverSlice.reducer
export const deliverActions = deliverSlice.actions
