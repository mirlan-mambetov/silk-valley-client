import { IProduct } from "@/interfaces/product.interface"
import { appApi } from "../api"

export const apiProduct = appApi.injectEndpoints({
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], null>({
			query: () => ({
				url: "/product",
				method: "Get",
			}),
		}),
		fetchBySlug: build.query<IProduct, { slug: string }>({
			query: ({ slug }) => ({
				url: `/product/by-alias/${slug}`,
				method: "Get",
			}),
		}),
	}),
})

export const { useFetchAllProductsQuery } = apiProduct
export const { useFetchBySlugQuery } = apiProduct
