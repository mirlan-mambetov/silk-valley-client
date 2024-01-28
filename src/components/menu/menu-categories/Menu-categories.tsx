"use client"

import { FC } from "react"
import { MenuComponent } from "../Menu"
import { HEADER_MENU } from "../menu.data"
import style from "./menu-categories.module.scss"

export const MenuCategoriesComponent: FC = () => {
	return (
		<div className={style.menu}>
			<MenuComponent
				className={style.list}
				data={HEADER_MENU}
				orientation="row-heigth"
				size="1xl"
			/>
		</div>
	)
}
