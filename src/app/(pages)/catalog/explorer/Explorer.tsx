"use client"

import { CatalogCardsComponent, FiltersComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import style from "./explorer.module.scss"

export const Explorer = () => {
	return (
		<div className={style.explorer}>
			<div className="container">
				<div className={style.wrap}>
					{/* FILTERS */}
					<FiltersComponent />
					{/* CATALOG CARDS */}
					<CatalogCardsComponent
						gridSize="4"
						data={CARDS_PRODUCT}
						limited={10}
					/>
				</div>
			</div>
		</div>
	)
}
