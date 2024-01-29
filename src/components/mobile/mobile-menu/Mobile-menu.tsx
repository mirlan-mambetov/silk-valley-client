"use client"

import { FC } from "react"
import { MenuComponent } from "../../menu/Menu"
import { HEADER_MENU } from "../../menu/menu.data"
import style from "./mobile-menu.module.scss"

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
