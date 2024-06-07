"use client"

import { FC } from "react"
import style from "./deliver.module.scss"

// const MapContainerComponent = dynamic(
// 	async () => await import("./old-map/Map-container"),
// 	{
// 		ssr: false,
// 	}
// )

export const DeliverComponent: FC = () => {
	// const { currentLocation } = useCurrentLocation()

	return (
		<div className={style.deliver}>
			{/* <DeliverDetailComponent position="fixed" /> */}
			{/* {currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null} */}
		</div>
	)
}
