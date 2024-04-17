import {
	IFilterInitialState,
	IFilterPayloadAction,
} from "@/interfaces/filter.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: IFilterInitialState = {
	filterUpdated: false,
	queryParams: {
		maxPrice: undefined,
		minPrice: undefined,
		selectedColor: undefined,
		selectedSize: undefined,
		sort: undefined,
	},
}
export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		addFilter: (state, { payload }: PayloadAction<IFilterPayloadAction>) => {
			const { key, value } = payload
			// Обрабатываем каждый фильтр отдельно
			// @ts-ignore
			state.queryParams[key] = value
			state.filterUpdated = true
		},
		resetFilters: (state) => {
			state.queryParams = initialState.queryParams
			state.filterUpdated = false
		},
	},
	extraReducers: (builder) => {},
})

export const filterActions = filterSlice.actions
export const filterReducer = filterSlice.reducer
