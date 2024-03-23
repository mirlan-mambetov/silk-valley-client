"use client"

import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import dynamic from "next/dynamic"
import { FC } from "react"
import { DeliverDetailComponent } from "./deliver-detail/Deliver-detail"
import style from "./deliver.module.scss"

const MapContainerComponent = dynamic(
	async () => await import("./map/Map-container"),
	{
		ssr: false,
	}
)

export const DeliverComponent: FC = () => {
	const { currentLocation } = useCurrentLocation()
	return (
		<div className={style.deliver}>
			<DeliverDetailComponent position="fixed" />
			{currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null}
		</div>
	)
}
