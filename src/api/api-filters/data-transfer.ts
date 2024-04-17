export interface IFilterProductResponse {
	sizes?: string[]
	colors: string[]
}
export interface IFilterQueryDTO {
	mainCategoryId?: number
	secondCategoryId?: number
	childsCategoryId?: number
}
