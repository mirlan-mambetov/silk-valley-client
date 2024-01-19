"use client"

import SelectComponent from "@/components/select/Select"
import { PRODUCT_SORT_SELECT_DATA } from "@/constants/Filters.constants"
import { IMenuData } from "@/interfaces/menu.interface"
import { Dispatch, FC, SetStateAction } from "react"
import { BsSortAlphaUpAlt } from "react-icons/bs"
import { FiList } from "react-icons/fi"
import { MdInvertColors } from "react-icons/md"
import { PriceRangeComponent } from "../price-range/Price-range"
import style from "./large-filter.module.scss"

interface ILargeFilterComponentProps {
	childCategories?: IMenuData
	setSort: Dispatch<SetStateAction<undefined | string>>
	setSelectedColor: Dispatch<SetStateAction<undefined | string>>
}

export const LargeFilterComponent: FC<ILargeFilterComponentProps> = ({
	setSelectedColor,
	setSort,
	childCategories,
}) => {
	return (
		<div className={style.large}>
			{/* SORT BY CATEGORIES */}
			{childCategories && (
				<div className={style.box}>
					<SelectComponent
						data={
							childCategories.childsData?.map((category) => ({
								key: category.id,
								label: category.name,
							})) || []
						}
						onChange={(value) => setSort(value.key.toString())}
						title={childCategories.name}
						TitleIcon={FiList}
					/>
				</div>
			)}
			{/* SORT BY SORTING POPULAR, PRICE */}
			<div className={style.box}>
				<SelectComponent
					data={PRODUCT_SORT_SELECT_DATA}
					onChange={(value) => setSort(value.key)}
					title={PRODUCT_SORT_SELECT_DATA[0].label}
					TitleIcon={BsSortAlphaUpAlt}
				/>
			</div>
			{/* SORTING BY COLORS */}
			<div className={style.box}>
				<SelectComponent
					data={[
						{
							key: "black",
							label: "Черный",
						},
						{
							key: "white",
							label: "Белый",
						},
						{
							key: "yellow",
							label: "Желтый",
						},
					]}
					onChange={(value) => setSelectedColor(value.key)}
					title="Цвет"
					TitleIcon={MdInvertColors}
				/>
			</div>
			{/* CHOICE PRICE RANGE */}
			<div className={style.box}>
				<PriceRangeComponent />
			</div>
		</div>
	)
}
