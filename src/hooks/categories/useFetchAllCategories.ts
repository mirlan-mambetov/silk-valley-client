import { CategoriesApi } from "@/api/api-categories/api-categories"
import { useQuery } from "@tanstack/react-query"

export const useFetchAllCategories = () => {
	const { data } = useQuery({
		queryKey: ["fetchCategories"],
		queryFn: () => CategoriesApi.fetchCategories(),
	})

	return data
}
