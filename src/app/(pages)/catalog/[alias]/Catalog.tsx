"use client"

import { FiltersApi } from "@/api/api-filters/api-filters"
import {
	FiltersComponent,
	LoaderComponent,
	ProductCardsComponent,
} from "@/components"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { useGetAttributes } from "@/hooks/filter/useGetAttributes"
import { ISecondCategories } from "@/interfaces/categories.interface"
import { useQuery } from "@tanstack/react-query"
import { FC, useEffect } from "react"
import style from "./catalog.module.scss"

interface ICatalogProps {
	data: ISecondCategories
}

export const Catalog: FC<ICatalogProps> = ({ data }) => {
	const { queryParams, deleteSearchParams, addSearchParams } = useFilterInit()

	const { data: products, isFetching } = useQuery({
		queryKey: ["filteredCatalogProducts", queryParams],
		queryFn: () => FiltersApi.filteredProducts(queryParams),
		initialData: data.products,
	})
	// GET ALL ATTRIBUTES FOR FILTER
	const { data: productAttributes, isFetching: loadingAttributes } =
		useGetAttributes({
			slug: data.slug,
		})

	useEffect(() => {
		addSearchParams("secondCategoryId", data.id.toString())
		deleteSearchParams("childsCategoryId")
	}, [])

	return (
		<div className={style.catalog}>
			<FiltersComponent
				attributesData={productAttributes}
				isLoadingAttributes={loadingAttributes}
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
