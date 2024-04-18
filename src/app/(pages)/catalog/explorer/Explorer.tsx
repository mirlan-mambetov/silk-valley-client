"use client"

import {
	FiltersComponent,
	LoaderComponent,
	ProductCardsComponent,
} from "@/components"
import { useFetchFilterProducts } from "@/hooks/filter/useFetchFilterProducts"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { useGetAttributes } from "@/hooks/filter/useGetAttributes"
import { ICategories } from "@/interfaces/categories.interface"
import { FC, useEffect } from "react"
import style from "./explorer.module.scss"

interface IExplorerProps {
	data: ICategories
}
export const Explorer: FC<IExplorerProps> = ({ data }) => {
	const { addSearchParams, deleteSearchParams } = useFilterInit()

	const { data: products, isFetching } = useFetchFilterProducts(data.products)

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
