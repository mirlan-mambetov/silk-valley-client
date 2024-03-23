"use client"

import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import dynamic from "next/dynamic"
import { FC, useEffect } from "react"
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
	const { openDialogHandler } = useStoreActions()

	useEffect(() => {
		openDialogHandler({
			message: "На карте можете кликнуть и выбрать координаты доставки",
		})
	}, [])
	return (
		<div className={style.deliver}>
			<DeliverDetailComponent position="fixed" />
			{currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null}
		</div>
	)
}
