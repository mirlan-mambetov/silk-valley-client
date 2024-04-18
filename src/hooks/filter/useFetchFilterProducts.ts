import { FiltersApi } from "@/api/api-filters/api-filters"
import { IProduct } from "@/interfaces/product.interface"
import { useQuery } from "@tanstack/react-query"
import { useFilter } from "./useFilter"

export const useFetchFilterProducts = (initialData: IProduct[]) => {
	const { queryParams } = useFilter()

	const { data, isFetching } = useQuery({
		queryKey: ["filteredCatalogProducts", queryParams],
		queryFn: () => FiltersApi.filteredProducts(queryParams),
		initialData: initialData,
	})

	return {
		data,
		isFetching,
	}
}
