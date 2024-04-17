import { FiltersApi } from "@/api/api-filters/api-filters"
import { useQuery } from "@tanstack/react-query"

interface IUseGetAttributesProps {
	slug: string
}
export const useGetAttributes = ({ slug }: IUseGetAttributesProps) => {
	const { data, isFetching } = useQuery({
		queryKey: ["fetchProductAttributes"],
		queryFn: () => FiltersApi.fetchProductsAttributes(slug),
	})

	return {
		data,
		isFetching,
	}
}
