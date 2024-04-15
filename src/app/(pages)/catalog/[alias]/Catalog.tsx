"use client"

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
				<div className={style.content}></div>
			</div>
		</div>
	)
}
