import { IGeo } from "@/interfaces/geo.interface"
import { IPointsDelivery } from "@/interfaces/select.location.interface"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IMapSlice {
	userLocation?: IGeo
	pointsDeliversLocation?: IPointsDelivery[]
	pointDeliverLocation?: IPointsDelivery
}
const initialState: IMapSlice | undefined = {}

export const mapSlice = createSlice({
	name: "map",
	initialState,
	reducers: {
		addUserLocation: (state, { payload }: PayloadAction<IGeo>) => {
			state.userLocation = payload
		},
		addPointsDeliversLocation: (
			state,
			{ payload }: PayloadAction<IPointsDelivery[]>
		) => {
			state.pointsDeliversLocation = payload
		},
		addPointDeliverLocation: (
			state,
			{ payload }: PayloadAction<IPointsDelivery>
		) => {
			state.pointDeliverLocation = payload
		},
		pointDeliverLocationReset: (state) => {
			state.pointDeliverLocation = undefined
		},
	},
	extraReducers: (build) => {},
})

export const mapActions = mapSlice.actions
export const mapReducers = mapSlice.reducer
