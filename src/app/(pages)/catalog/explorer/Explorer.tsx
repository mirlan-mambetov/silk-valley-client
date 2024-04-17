"use client"

import { FiltersApi } from "@/api/api-filters/api-filters"
import {
	FiltersComponent,
	LoaderComponent,
	ProductCardsComponent,
} from "@/components"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { useGetAttributes } from "@/hooks/filter/useGetAttributes"
import { ICategories } from "@/interfaces/categories.interface"
import { useQuery } from "@tanstack/react-query"
import { FC, useEffect } from "react"
import style from "./explorer.module.scss"

interface IExplorerProps {
	data: ICategories
}
export const Explorer: FC<IExplorerProps> = ({ data }) => {
	const { queryParams, addSearchParams, deleteSearchParams } = useFilterInit()

	const { data: products, isFetching } = useQuery({
		queryKey: ["filteredProducts", queryParams],
		queryFn: () => FiltersApi.filteredProducts(queryParams),
		initialData: data.products,
	})

	// GET ALL ATTRIBUTES FOR FILTER
	const { data: productAttributes, isFetching: loadingAttributes } =
		useGetAttributes({
			slug: data.slug,
		})

	useEffect(() => {
		addSearchParams("mainCategoryId", data.id.toString())
		deleteSearchParams("secondCategoryId")
	}, [])

	return (
		<div className={style.explorer}>
			<div className="container">
				<div className={style.wrap}>
					{/* FILTERS */}
					{data && (
						<FiltersComponent
							data={data}
							categoryId="second"
							attributesData={productAttributes}
							isLoadingAttributes={loadingAttributes}
						/>
					)}
					{/* CATALOG CARDS */}
					<div className={style.products}>
						{isFetching ? (
							<LoaderComponent color="black" position="absolute" />
						) : (
							<ProductCardsComponent products={products} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
