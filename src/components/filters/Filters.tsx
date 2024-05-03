"use client"

import { FC, useEffect } from "react"

import { IFilterProductResponse } from "@/api/api-filters/data-transfer"
import { PRODUCT_SORT_SELECT_DATA } from "@/constants/Filters.constants"
import { useFilterInit } from "@/hooks/filter/useFilter"
import {
	IChildsCategories,
	ISecondCategories,
} from "@/interfaces/categories.interface"
import cn from "classnames"
import { BsSortAlphaUpAlt } from "react-icons/bs"
import { FiList } from "react-icons/fi"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors } from "react-icons/md"
import { PriceRangeComponent } from ".."
import SelectComponent from "../select/Select"
import style from "./filters.module.scss"

interface IFiltersComponentProps {
	categoryId: "second" | "child"
	data: {
		id: number
		slug: string
		categories?: ISecondCategories[]
		childsCategories?: IChildsCategories[]
	}
	attributesData: IFilterProductResponse[] | undefined
	isLoadingAttributes: boolean
}
export const FiltersComponent: FC<IFiltersComponentProps> = ({
	data,
	categoryId,
	attributesData,
	isLoadingAttributes,
}) => {
	const { addSearchParams, resetFilters } = useFilterInit()

	useEffect(() => {
		resetFilters()
	}, [])

	return (
		<div
			className={cn(style.filters, {
				[style.grid5]: attributesData?.some(
					(attribute) => attribute.size?.length
				),
			})}
		>
			{data.categories?.length || data.childsCategories?.length ? (
				<div className={style.box}>
					<SelectComponent
						isLoading={isLoadingAttributes}
						data={
							data.categories?.map((category) => ({
								key: category.id,
								label: category.name,
							})) ||
							data.childsCategories?.map((category) => ({
								key: category.id,
								label: category.name,
							}))
						}
						onChange={(value) =>
							addSearchParams(
								categoryId === "second"
									? "secondCategoryId"
									: "childsCategoryId",
								value.key.toString()
							)
						}
						title={"По категориям"}
						TitleIcon={FiList}
					/>
				</div>
			) : null}
			{/* SORT BY SORTING POPULAR, PRICE */}
			<div className={style.box}>
				<SelectComponent
					data={PRODUCT_SORT_SELECT_DATA}
					onChange={(value) => addSearchParams("sort", value.key)}
					title={PRODUCT_SORT_SELECT_DATA[0].label}
					TitleIcon={BsSortAlphaUpAlt}
				/>
			</div>
			{/* SORTING BY COLORS */}
			<div className={style.box}>
				<SelectComponent
					isLoading={isLoadingAttributes}
					data={attributesData?.map((attribute) => ({
						key: attribute.color,
						label: attribute.color,
					}))}
					onChange={(value) => addSearchParams("selectedColor", value.key)}
					title="Цвет"
					TitleIcon={MdInvertColors}
				/>
			</div>
			{/* SORTING BY SIZES */}
			<div className={style.box}>
				<SelectComponent
					isLoading={isLoadingAttributes}
					data={attributesData?.map((attribute) => ({
						key: attribute.size || "undefined",
						label: attribute.size || "undefined",
					}))}
					onChange={(value) => addSearchParams("selectedSize", value.key)}
					title="Размер"
					TitleIcon={IoResizeOutline}
				/>
			</div>
			{/* CHOICE PRICE RANGE */}
			<div className={style.box}>
				<PriceRangeComponent />
			</div>
		</div>
	)
}
