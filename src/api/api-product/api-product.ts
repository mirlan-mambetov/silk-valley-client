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
	async fetchByCategorySlug(slug?: string) {
		if (slug) {
			const response = await apiBase<IProduct[]>({
				url: `/product/by-category/${slug}`,
				method: "GET",
			})
			return response.data
		}
		return null
	},
}
