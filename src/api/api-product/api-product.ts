import { IProduct } from "@/interfaces/product.interface"
import { apiBase } from "../axios-base"

export const ProductApi = {
	/**
	 *
	 * @returns
	 */
	async fetchAllProducts() {
		const response = await apiBase<IProduct[]>({
			url: "/product",
			method: "GET",
		})
		return response.data
	},

	/**
	 *
	 * @param slug
	 * @returns
	 */
	async fetchBySlug(slug?: string) {
		if (slug) {
			const response = await apiBase<IProduct>({
				url: `/product/by-alias/${slug}`,
				method: "GET",
			})
			return response.data
		}
		return null
	},

	/**
	 *
	 * @param slug
	 * @returns
	 */
	async fetchByCategorySlug({
		mainCategorySlug,
		secondCategorySlug,
	}: {
		mainCategorySlug?: string
		secondCategorySlug?: string
	}) {
		const response = await apiBase<IProduct[]>({
			url: `/product/by-category`,
			method: "GET",
			params: mainCategorySlug ? { mainCategorySlug } : { secondCategorySlug },
		})
		return response.data
	},
}
