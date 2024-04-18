import {
	IFilterInitialState,
	IFilterPayloadAction,
} from "@/interfaces/filter.interface"
import { IFilter } from "@/types/filter.type"
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
		resetFilters: (state, { payload }: PayloadAction<keyof IFilter>) => {
			const key = payload
			state.queryParams[key] = undefined
			state.queryParams.minPrice = undefined
			state.queryParams.maxPrice = undefined
			state.queryParams.selectedColor = undefined
			state.queryParams.selectedSize = undefined
			state.queryParams.sort = undefined
			state.filterUpdated = false
		},
	},
	extraReducers: (builder) => {},
})

export const filterActions = filterSlice.actions
export const filterReducer = filterSlice.reducer
