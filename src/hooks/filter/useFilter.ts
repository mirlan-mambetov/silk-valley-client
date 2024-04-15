"use client"

import { IFilter } from "@/types/filter.type"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useFilter = () => {
	const filter = useStoreReducer((state) => state.filter)
	return filter
}

export const useFilterInit = () => {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const { replace } = useRouter()
	const { addFilter, resetFilterUpdate } = useStoreActions()
	const { filterUpdated, queryParams } = useFilter()

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
		replace(pathName + `?${newParams.toString().replace(/%7C/g, "|")}`)
		addFilter({ key, value })
	}

	return {
		updateSearchParams,
		queryParams,
		filterUpdated,
		resetFilterUpdate,
	}
}
