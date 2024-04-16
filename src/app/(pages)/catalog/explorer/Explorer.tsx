"use client"

import { FiltersApi } from "@/api/api-filters/api-filters"
import {
	FiltersComponent,
	LoaderComponent,
	ProductCardsComponent,
} from "@/components"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { ICategories } from "@/interfaces/categories.interface"
import { useQuery } from "@tanstack/react-query"
import { FC, useEffect } from "react"
import style from "./explorer.module.scss"

interface IExplorerProps {
	data: ICategories
}
export const Explorer: FC<IExplorerProps> = ({ data }) => {
	const { queryParams, updateSearchParams } = useFilterInit()

	const {
		data: products,
		isPending,
		isFetching,
	} = useQuery({
		queryKey: ["filteredProducts", queryParams],
		queryFn: () => FiltersApi.filteredProducts(queryParams),
		initialData: data.products,
	})

	useEffect(() => {
		updateSearchParams("mainCategoryId", data.id.toString())
		updateSearchParams("secondCategoryId", "")
	}, [])

	return (
		<div className={style.explorer}>
			<div className="container">
				<div className={style.wrap}>
					{/* FILTERS */}
					{data && <FiltersComponent data={data} />}
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
