"use client"

import { SidebarComponent } from "@/components"

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
				<div className={style.content}></div>
			</div>
		</div>
	)
}
