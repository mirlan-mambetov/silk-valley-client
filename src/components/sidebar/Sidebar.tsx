"use client"

import { usePathname } from "next/navigation"
import { MenuComponent } from ".."
import { HEADER_MENU } from "../menu/menu.data"
import style from "./sidebar.module.scss"

export const SidebarComponent = () => {
	const pathName = usePathname()
	// let result = pathName.replace(/^.*?\/(\w+)$/, "$1")

	const data = HEADER_MENU.find(
		(item) => item.alias === pathName.replace("/", "")
	)
	return (
		<div className={style.sidebar}>
			<div className={style.wrap}>
				{data?.childsData && (
					<MenuComponent data={data?.childsData} orientation="row-heigth" />
				)}
			</div>
		</div>
	)
}
