import { IFilter } from "@/types/filter.type"

export interface IFilterInitialState {
	filterUpdated: boolean
	queryParams: IFilter
}

export interface IFilterPayloadAction {
	key: keyof IFilter
	value: string
}
