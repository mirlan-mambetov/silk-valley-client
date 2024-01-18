"use client"

import { PRODUCT_SORT_SELECT_DATA } from "@/constants/Filters.constants"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BsSortAlphaUpAlt } from "react-icons/bs"
import { FiList } from "react-icons/fi"
import { MdInvertColors } from "react-icons/md"
import { HEADER_MENU } from "../menu/menu.data"

import SelectComponent from "../select/Select"

import { PriceRangeComponent } from ".."
import style from "./filters.module.scss"

export const FiltersComponent = () => {
	const [sort, setSort] = useState<undefined | string>()
	const [selectedColor, setSelectedColor] = useState<undefined | string>()

	const pathName = usePathname()
	const pathNameReplaced = pathName.replace("/", "")
	const childsCategories = HEADER_MENU.find((item) =>
		item.childsData?.find((childs) => childs.alias === pathNameReplaced)
	)

	return (
		<div className={style.filters}>
			<div className={style.top}>
				{/* SORT BY CATEGORIES */}
				{childsCategories && (
					<div className={style.box}>
						<SelectComponent
							data={
								childsCategories.childsData?.map((category) => ({
									key: category.id,
									label: category.name,
								})) || []
							}
							onChange={(value) => setSort(value.key.toString())}
							title={childsCategories.name}
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
		</div>
	)
}
