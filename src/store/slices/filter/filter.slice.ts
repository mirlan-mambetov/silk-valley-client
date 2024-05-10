import {
	IFilterInitialState,
	IFilterPayloadAction,
} from "@/interfaces/filter.interface"
import { IFilter } from "@/types/filter.type"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: IFilterInitialState = {
	filterUpdated: false,
	queryParams: {},
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
		resetFilterByKey: (state, { payload }: PayloadAction<keyof IFilter>) => {
			const key = payload
			state.queryParams[key] = undefined
		},
		resetAllFilters: (state) => {
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
