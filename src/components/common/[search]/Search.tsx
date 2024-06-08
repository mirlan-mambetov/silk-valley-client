"use client"

import { FieldComponent } from "@/components"
import { FC } from "react"
import style from "./search.module.scss"

export const SearchComponent: FC = () => {
	return (
		<div className={style.search}>
			<FieldComponent />
		</div>
	)
}
