"use client"

import { __ProductCards, FiltersComponent, Loader } from "@/components"
import { useFetchFilterProducts } from "@/hooks/filter/useFetchFilterProducts"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { useGetAttributes } from "@/hooks/filter/useGetAttributes"
import { ISecondCategories } from "@/interfaces/categories.interface"
import { FC, useEffect } from "react"
import style from "./catalog.module.scss"

interface ICatalogProps {
	data: ISecondCategories
}

export const Catalog: FC<ICatalogProps> = ({ data }) => {
	const { deleteSearchParams, addSearchParams } = useFilterInit()

	const { data: products, isFetching } = useFetchFilterProducts(data.products)

	// GET ALL ATTRIBUTES FOR FILTER
	const { data: productAttributes, isFetching: loadingAttributes } =
		useGetAttributes({
			slug: data.slug,
		})

	useEffect(() => {
		addSearchParams("secondCategoryId", data.id.toString())
		deleteSearchParams("mainCategoryId")
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
					<Loader color="black" position="absolute" />
				) : (
					<__ProductCards products={products} />
				)}
			</div>
		</div>
	)
}
