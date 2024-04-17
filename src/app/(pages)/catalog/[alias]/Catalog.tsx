"use client"

import { FiltersApi } from "@/api/api-filters/api-filters"
import {
	FiltersComponent,
	LoaderComponent,
	ProductCardsComponent,
} from "@/components"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { ISecondCategories } from "@/interfaces/categories.interface"
import { useQuery } from "@tanstack/react-query"
import { FC, useEffect } from "react"
import style from "./catalog.module.scss"

interface ICatalogProps {
	data: ISecondCategories
}

export const Catalog: FC<ICatalogProps> = ({ data }) => {
	const { queryParams, deleteSearchParams, updateSearchParams } =
		useFilterInit()

	const { data: products, isFetching } = useQuery({
		queryKey: ["filteredCatalogProducts", queryParams],
		queryFn: () => FiltersApi.filteredProducts(queryParams),
		initialData: data.products,
	})

	useEffect(() => {
		updateSearchParams("secondCategoryId", data.id.toString())
		deleteSearchParams("childsCategoryId")
	}, [])

	return (
		<div className={style.catalog}>
			<FiltersComponent
				categoryId="child"
				data={{ ...data, childsCategories: data.childsCategories }}
			/>
			<div className={style.products}>
				{isFetching ? (
					<LoaderComponent color="black" position="absolute" />
				) : (
					<ProductCardsComponent products={products} />
				)}
			</div>
		</div>
	)
}
