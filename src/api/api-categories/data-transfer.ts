import { IFilter } from "@/types/filter.type"

export interface ICategoryBySlugPayload {
	slug: string
	filters: IFilter
}
