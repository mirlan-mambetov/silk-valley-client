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
				<h4 className={style.title}>Каталог</h4>
				{/* MENU CATEGORIES */}
				{data?.childsData && (
					<MenuComponent
						className={style.menu}
						data={data?.childsData}
						orientation="row-heigth"
						size="1xl"
					/>
				)}
				{/* SORT COLORS AND SIZES */}
				{/* <ProducAttributeComponent
					data={["32xl", "34xl", "38xl", "48XXL"]}
					title="Размеры"
					orientation="column"
					className={style.attributes}
					size="1xl"
				/>
				<ProducAttributeComponent
					data={["Черный", "Черно/Белый", "Красный", "Белый"]}
					title="Цвета"
					orientation="column"
					className={style.attributes}
					size="1xl"
				/>
				<PriceRangeComponent /> */}
			</div>
		</div>
	)
}
