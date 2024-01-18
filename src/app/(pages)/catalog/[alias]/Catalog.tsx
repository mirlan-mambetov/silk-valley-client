"use client"

import { CatalogCardsComponent, SidebarComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import { FC } from "react"
import style from "./catalog.module.scss"

interface ICatalog {}
export const Catalog: FC<ICatalog> = () => {
	return (
		<div className={style.catalog}>
			{/* ROUTES HISTORY */}
			{/* AFTER BACK END */}
			{/* <RoutesHistoryComponent
				links={[
					{
						href: `/catalog/${path}`,
						name: "Для мужчин",
					},
				]}
			/> */}
			<div className={style.wrap}>
				<SidebarComponent />
				<div className={style.content}>
					<CatalogCardsComponent data={CARDS_PRODUCT} />
					{/* <CardsComponent products={CARDS_PRODUCT} grid="5" limit={10} /> */}
				</div>
			</div>
		</div>
	)
}
