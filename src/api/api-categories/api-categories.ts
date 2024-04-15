import { ICategories } from "@/interfaces/categories.interface"
import { apiBase } from "../axios-base"

export const CategoriesApi = {
	async fetchCategories() {
		const response = await apiBase<ICategories[]>({
			url: "/main-category",
			method: "GET",
		})
		return response.data
	},
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
}
