"use client"

import { FC } from "react"
import { FieldComponent } from ".."
import style from "./search.module.scss"

export const SearchComponent: FC = () => {
	return (
		<div className={style.search}>
			<FieldComponent />
		</div>
	)
}
