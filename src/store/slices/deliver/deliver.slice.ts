import { IDeliverPoint } from "@/interfaces/deliver.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IDeliverInitialState {
	address: IDeliverPoint
}

const initialState: IDeliverInitialState = {
	address: {
		city: "",
		city_district: "",
		country: "",
		country_code: "",
		house_number: "",
		postCode: "",
		road: "",
		state: "",
		town: "",
		village: "",
	},
}

export const deliverSlice = createSlice({
	name: "deliver",
	initialState,
	reducers: {
		addDeliverAddress: (state, { payload }: PayloadAction<IDeliverPoint>) => {
			state.address = payload
		},
		updateDeliverAddress: (
			state,
			{ payload }: PayloadAction<IDeliverPoint>
		) => {
			Object.entries(payload).forEach(([key, value]) => {
				if (value !== undefined && value !== "") {
					state.address[key] = value
				}
			})
		},
	},
	extraReducers: (build) => {},
})

export const deliverReducer = deliverSlice.reducer
export const deliverActions = deliverSlice.actions
