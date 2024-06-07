"use client"

import dynamic from "next/dynamic"
import { FC } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { IMapContainerProps } from "./MapContainer.props"
import style from "./map.module.scss"

const MapComponent = dynamic(async () => await import("./Map"), {
	ssr: false,
})
const MapContainerComponent: FC<IMapContainerProps> = ({ currentLocation }) => {
	return (
		<div className={style.map}>
			<MapContainer
				wheelPxPerZoomLevel={12}
				className={style.leaflet}
				center={{
					lat: currentLocation.lat,
					lng: currentLocation.lng,
				}}
				zoom={40}
				zoomControl={false}
				scrollWheelZoom={true}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
				<MapComponent currentLocation={currentLocation} />
			</MapContainer>
		</div>
	)
}
export default MapContainerComponent
