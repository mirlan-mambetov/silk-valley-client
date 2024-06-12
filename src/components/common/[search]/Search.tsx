"use client"

import { FieldComponent } from "@/components"
import { FC } from "react"
import style from "./search.module.scss"

export const Search: FC = () => {
	return (
		<div className={style.search}>
			<FieldComponent placeholder="Поиск на Silk Valley" />
		</div>
	)
}
