import {
	ICategories,
	ISecondCategories,
} from "@/interfaces/categories.interface"
import { apiBase } from "../axios-base"

export const MAIN_UIR_PATH = "/main-category"
export const SECOND_UIR_PATH = "/childs-category"
export const CHILDS_UIR_PATH = "/childs-category"
export const CategoriesApi = {
	/**
	 *
	 * @returns Main categories []
	 */
	async fetchCategories() {
		const response = await apiBase<ICategories[]>({
			url: MAIN_UIR_PATH,
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
				url: `${MAIN_UIR_PATH}/by-slug/${slug}`,
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
			url: SECOND_UIR_PATH,
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
				url: `${SECOND_UIR_PATH}/by-alias/${slug}`,
				method: "GET",
			})
			return response.data
		} else {
			return null
		}
	},
}
