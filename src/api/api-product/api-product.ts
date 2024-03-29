import { IProduct } from "@/interfaces/product.interface"
import { appApi } from "../api"

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
