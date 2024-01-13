"use client"

import {
	CardsComponent,
	FiltersComponent,
	SidebarComponent,
} from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import style from "./catalog.module.scss"

export const Catalog = () => {
	return (
		<div className={style.catalog}>
			<SidebarComponent />
			<div className={style.content}>
				<FiltersComponent />
				<CardsComponent products={CARDS_PRODUCT} grid="5" limit={10} />
			</div>
		</div>
	)
}
