"use client"

import { FC } from "react"

import { FiltersApi } from "@/api/api-filters/api-filters"
import { PRODUCT_SORT_SELECT_DATA } from "@/constants/Filters.constants"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { ICategories } from "@/interfaces/categories.interface"
import { useQuery } from "@tanstack/react-query"
import cn from "classnames"
import { BsSortAlphaUpAlt } from "react-icons/bs"
import { FiList } from "react-icons/fi"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors } from "react-icons/md"
import { PriceRangeComponent } from ".."
import SelectComponent from "../select/Select"
import style from "./filters.module.scss"

interface IFiltersComponentProps {
	data: ICategories
}
export const FiltersComponent: FC<IFiltersComponentProps> = ({ data }) => {
	const { data: productAttributes, isPending } = useQuery({
		queryKey: ["fetchProductAttributes"],
		queryFn: () => FiltersApi.fetchProductsAttributes(data.slug),
	})
	const { updateSearchParams } = useFilterInit()

	return (
		<div
			className={cn(style.filters, {
				[style.grid5]: productAttributes?.sizes?.length,
			})}
		>
			{/* SORT BY CATEGORIES */}
			<div className={style.box}>
				<SelectComponent
					isLoading={isPending}
					data={
						data.categories?.map((category) => ({
							key: category.id,
							label: category.name,
						})) || []
					}
					onChange={(value) =>
						updateSearchParams("secondCategoryId", value.key.toString())
					}
					title={"По категориям"}
					TitleIcon={FiList}
				/>
			</div>
			{/* SORT BY SORTING POPULAR, PRICE */}
			<div className={style.box}>
				<SelectComponent
					data={PRODUCT_SORT_SELECT_DATA}
					onChange={(value) => updateSearchParams("sort", value.key)}
					title={PRODUCT_SORT_SELECT_DATA[0].label}
					TitleIcon={BsSortAlphaUpAlt}
				/>
			</div>
			{/* SORTING BY COLORS */}
			<div className={style.box}>
				<SelectComponent
					isLoading={isPending}
					data={productAttributes?.colors.map((color) => ({
						key: color,
						label: color,
					}))}
					onChange={(value) => updateSearchParams("selectedColor", value.key)}
					title="Цвет"
					TitleIcon={MdInvertColors}
				/>
			</div>
			{/* SORTING BY SIZES */}
			{productAttributes?.sizes?.length ? (
				<div className={style.box}>
					<SelectComponent
						isLoading={isPending}
						data={productAttributes?.sizes?.map((size) => ({
							key: size,
							label: size,
						}))}
						onChange={(value) => updateSearchParams("selectedSize", value.key)}
						title="Размеры"
						TitleIcon={IoResizeOutline}
					/>
				</div>
			) : null}
			{/* CHOICE PRICE RANGE */}
			<div className={style.box}>
				<PriceRangeComponent />
			</div>
		</div>
	)
}
