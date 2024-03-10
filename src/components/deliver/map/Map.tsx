"use client"

import dynamic from "next/dynamic"
import style from "./map.module.scss"

const Map = dynamic(
	async () =>
		(await import("./map-components/Map-container")).MapContainerComponent,
	{
		ssr: false,
	}
)
export const MapComponent = () => {
	return (
		<div className={style.map}>
			<Map />
		</div>
	)
}
