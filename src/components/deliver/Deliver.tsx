"use client"

import { FC } from "react"
import style from "./deliver.module.scss"
import { MapComponent } from "./map/Map"

export const DeliverComponent: FC = () => {
	return (
		<div className={style.deliver}>
			<div className={style.information}>information</div>
			<MapComponent />
		</div>
	)
}
