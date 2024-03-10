"use client"

import dynamic from "next/dynamic"
import { TbCurrentLocation } from "react-icons/tb"
import { VscLocation } from "react-icons/vsc"
import { MapContainer } from "react-leaflet"
import style from "./map.module.scss"

import { ButtonComponent } from "@/components/button/Button"
import { FC } from "react"
import { IMapProps } from "./Map.props"

const MapComponent = dynamic(
	async () => await import("./map-components/Map-component"),
	{
		ssr: false,
	}
)
const MapContainerComponent: FC<IMapProps> = ({ currentLocation }) => {
	return (
		<div className={style.map}>
			<MapContainer
				wheelPxPerZoomLevel={12}
				className={style.leaflet}
				center={{
					lat: currentLocation?.lat,
					lng: currentLocation?.lng,
				}}
				zoom={13}
				zoomControl={false}
				scrollWheelZoom={true}
			>
				<MapComponent currentLocation={currentLocation} />
			</MapContainer>

			<div className={style.navigation}>
				<div className={style.button}>
					<ButtonComponent>
						<TbCurrentLocation />
						<span>Где я ?</span>
					</ButtonComponent>
				</div>
				<div className={style.button}>
					<ButtonComponent>
						<VscLocation />
						<span>Silk Valley</span>
					</ButtonComponent>
				</div>
			</div>
		</div>
	)
}
export default MapContainerComponent
