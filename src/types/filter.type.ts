import { EnumProductSort } from "@/enums/Filters.enum"

export type IFilter = {
	childsCategoryId?: number
	secondCategoryId?: number
	mainCategoryId?: number
	selectedColor?: string
	selectedSize?: string
	sort?: EnumProductSort
	maxPrice?: number | string
	minPrice?: number | string
}
