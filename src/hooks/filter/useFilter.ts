"use client"

import { IFilter } from "@/types/filter.type"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useFilter = () => {
	const { filterUpdated, queryParams } = useStoreReducer(
		(state) => state.filter
	)
	return { filterUpdated, queryParams }
}

export const useFilterInit = () => {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const { replace } = useRouter()
	const { addFilter, resetFilters } = useStoreActions()
	const { queryParams } = useFilter()

	useEffect(() => {
		searchParams?.forEach((value, key) => {
			addFilter({
				key: key as keyof IFilter,
				value,
			})
		})
	}, [])

	const updateSearchParams = (key: keyof IFilter, value: string) => {
		const newParams = new URLSearchParams(searchParams?.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}
		replace(pathName + `?${newParams.toString().replace(/%7C/g, "|")}`, {
			scroll: false,
		})
		addFilter({ key, value })
	}

	const deleteSearchParams = (key: keyof IFilter) => {
		const newParams = new URLSearchParams(searchParams?.toString())
		newParams.delete(key)
		replace(pathName + `?${newParams.toString().replace(/%7C/g, "|")}`, {
			scroll: false,
		})
	}

	return {
		updateSearchParams,
		queryParams,
		resetFilters,
		deleteSearchParams,
	}
}
