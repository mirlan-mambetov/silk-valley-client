"use client"

import {
	PRODUCT_SORT_SELECT_BY_ATTRIBUTES,
	PRODUCT_SORT_SELECT_BY_PRICE,
	PRODUCT_SORT_SELECT_DATA,
} from "@/constants/Filters.constants"
import {
	EnumProductPrice,
	EnumProductSort,
	EnumProductSortByAttributes,
} from "@/enums/Filters.enum"
import { useState } from "react"
import SelectComponent from "../select/Select"
import style from "./filters.module.scss"

export const FiltersComponent = () => {
	const [sort, setSort] = useState<EnumProductSort>(EnumProductSort.NEWEST)
	const [attributes, setAttributes] = useState<EnumProductSortByAttributes>(
		EnumProductSortByAttributes.COLOR
	)
	const [price, setPrice] = useState<EnumProductPrice>(
		EnumProductPrice.HIGH_PRICE
	)

	return (
		<div className={style.filters}>
			<div className={style.top}>
				<div className={style.box}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_BY_PRICE}
						onChange={(value) => setPrice(value.key)}
						title="Цена"
					/>
				</div>
				<div className={style.box}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSort(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
				<div className={style.box}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_BY_ATTRIBUTES}
						onChange={(value) => setAttributes(value.key)}
						title={PRODUCT_SORT_SELECT_BY_ATTRIBUTES[0].label}
					/>
				</div>
				<div className={style.box}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSort(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
				<div className={style.box}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSort(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
			</div>
		</div>
	)
}
