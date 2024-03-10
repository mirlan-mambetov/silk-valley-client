"use client"

import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import dynamic from "next/dynamic"
import { FC } from "react"
import style from "./deliver.module.scss"

const MapContainerComponent = dynamic(
	async () => await import("./map/Map-container"),
	{
		ssr: false,
	}
)

export const DeliverComponent: FC = () => {
	console.log("d")

	const { currentLocation } = useCurrentLocation()
	return (
		<div className={style.deliver}>
			<div className={style.information}>
				<h5 className={style.title}>
					<span>Детали доставки</span>
				</h5>
				<div className={style.rows}>
					<div className={style.row}>
						<small>Город:</small>
						<span>Каракол</span>
					</div>
					<div className={style.row}>
						<small>Улица:</small>
						<span>Ахунбаева</span>
					</div>
					<div className={style.row}>
						<small>Дом №:</small>
						<span>140 уточнить?</span>
					</div>
					<div className={style.row}>
						<small>Почтовый индекс:</small>
						<span>722200</span>
					</div>
				</div>
			</div>
			{/* {currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null} */}
		</div>
	)
}
