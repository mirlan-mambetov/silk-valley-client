import {
	ICategories,
	ISecondCategories,
} from "@/interfaces/categories.interface"
import { apiBase } from "../axios-base"

export const CategoriesApi = {
	/**
	 *
	 * @returns Main categories []
	 */
	async fetchCategories() {
		const response = await apiBase<ICategories[]>({
			url: "/main-category",
			method: "GET",
		})
		return response.data
	},

	/**
	 *
	 * @param slug
	 * @returns Main category
	 */
	async fetchCategoryBySlug(slug?: string) {
		if (slug) {
			const response = await apiBase<ICategories>({
				url: `/main-category/by-slug/${slug}`,
				method: "GET",
			})
			return response.data
		} else {
			return null
		}
	},

	// SECOND CATEGORIES

	/**
	 *
	 * @returns Second categories []
	 */
	async fetchSecondCategories() {
		const response = await apiBase<ISecondCategories[]>({
			url: `/second-category`,
			method: "GET",
		})
		return response.data
	},
	/**
	 *
	 * @param slug
	 * @returns Second category
	 */
	async fetchSecondCategoryBySlug(slug?: string) {
		if (slug) {
			const response = await apiBase<ISecondCategories>({
				url: `/second-category/by-alias/${slug}`,
				method: "GET",
			})
			return response.data
		} else {
			return null
		}
	},
}
