import { IProduct } from "@/interfaces/product.interface"
import { appApi } from "../api"
import { axiosApi } from "../axios.api"

export const apiProduct = appApi.injectEndpoints({
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], null>({
			query: () => ({
				url: "/product",
			}),
		}),
	}),
})

export const { useFetchAllProductsQuery } = apiProduct

export const productFetchAxios = async () => {
	const response = await axiosApi<IProduct[]>({
		url: `/product`,
		method: "Get",
	})
	return response
}
export const productFetchByAlias = async ({ slug }: { slug?: string }) => {
	if (slug) {
		const response = await axiosApi<IProduct>({
			url: `/product/by-alias/${slug}`,
			method: "Get",
		})
		return response
	}
	return null
}
