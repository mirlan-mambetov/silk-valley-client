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
			<div className={style.information}>information</div>
			{currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null}
		</div>
	)
}
