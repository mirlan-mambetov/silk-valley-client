"use client"

import { FiltersComponent } from "@/components"
import style from "./explorer.module.scss"

export const Explorer = () => {
	return (
		<div className={style.explorer}>
			<div className="container">
				<div className={style.wrap}>
					{/* FILTERS */}
					<FiltersComponent />
					{/* CATALOG CARDS */}
				</div>
			</div>
		</div>
	)
}
