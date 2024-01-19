"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { HEADER_MENU } from "../menu/menu.data"

import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import style from "./filters.module.scss"
import { LargeFilterComponent } from "./large-filter/Large-filter"

export const FiltersComponent = () => {
	const [sort, setSort] = useState<undefined | string>()
	const [selectedColor, setSelectedColor] = useState<undefined | string>()
	const { width } = useWindowWidth()

	const pathName = usePathname()
	const pathNameReplaced = pathName.replace("/", "")
	const childsCategories = HEADER_MENU.find((item) =>
		item.childsData?.find((childs) => childs.alias === pathNameReplaced)
	)

	return (
		<div className={style.filters}>
			<LargeFilterComponent
				setSelectedColor={setSelectedColor}
				setSort={setSort}
				childCategories={childsCategories}
			/>
			{/* <MobileFilterComponent /> */}
		</div>
	)
}
