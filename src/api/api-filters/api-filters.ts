import { IProduct } from "@/interfaces/product.interface"
import { IFilter } from "@/types/filter.type"
import { apiBase } from "../axios-base"
import { IFilterProductResponse } from "./data-transfer"

export const FiltersApi = {
	/**
	 *
	 * @param slug
	 * @returns
	 */
	async fetchProductsAttributes(slug?: string) {
		if (slug) {
			const response = await apiBase<IFilterProductResponse>({
				url: `/filters/category/product/attributes/${slug}`,
				method: "GET",
			})
			return response.data
		}
	},

	/**
	 *
	 * @param queryParams
	 * @returns
	 */
	async filteredProducts(queryParams: IFilter) {
		const response = await apiBase<IProduct[]>({
			url: "/filters/product/filter",
			method: "GET",
			params: { ...queryParams },
		})
		return response.data
	},
}
