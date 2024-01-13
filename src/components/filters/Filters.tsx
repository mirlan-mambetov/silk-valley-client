"use client"

import { PRODUCT_SORT_SELECT_DATA } from "@/constants/Filters.constants"
import { EnumProductSort } from "@/enums/Filters.enum"
import { useState } from "react"
import SelectComponent from "../select/Select"
import style from "./filters.module.scss"

export const FiltersComponent = () => {
	const [selected, setSelected] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	return (
		<div className={style.filters}>
			<div className={style.top}>
				<div className={style.select}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSelected(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
				<div className={style.select}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSelected(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
				<div className={style.select}>
					<SelectComponent
						data={PRODUCT_SORT_SELECT_DATA}
						onChange={(value) => setSelected(value.key)}
						title={PRODUCT_SORT_SELECT_DATA[0].label}
					/>
				</div>
			</div>
		</div>
	)
}
