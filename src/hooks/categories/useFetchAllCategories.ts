import { CategoriesApi } from "@/api/api-categories/api-categories"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useStoreActions } from "../store/useStoreActions"

export const useFetchAllCategories = () => {
	const { openNotifyHandler } = useStoreActions()
	const { data, isFetching, error } = useQuery({
		queryKey: ["fetchCategories"],
		queryFn: () => CategoriesApi.fetchCategories(),
	})

	useEffect(() => {
		if (error) {
			openNotifyHandler({
				text: error.message,
				type: "error",
			})
		}
	}, [error])
	return { data, isFetching }
}
