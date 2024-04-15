import { IProduct } from "@/interfaces/product.interface"
import { IFilter } from "@/types/filter.type"
import { appApi } from "../api"
import { IFilterProductResponse } from "./data-transfer"

export const filtersApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		// FETCH ALL PRODUCTS ATTRIBUTES FOR FILTER
		fetchProductAttributes: build.query<IFilterProductResponse, string>({
			query: (slug) => ({
				url: `/filters/category/${slug}`,
				method: "Get",
			}),
		}),
		filteredProducts: build.query<IProduct[], { queryParams: IFilter }>({
			query: ({ queryParams }) => ({
				url: `/filters/product/filter`,
				method: "Get",
				params: queryParams,
			}),
		}),
	}),
})
export const { useFetchProductAttributesQuery, useFilteredProductsQuery } =
	filtersApi
