"use client"

import dynamic from "next/dynamic"
import { TbCurrentLocation } from "react-icons/tb"
import { VscLocation } from "react-icons/vsc"
import { MapContainer } from "react-leaflet"
import style from "./map.module.scss"

import { ButtonComponent } from "@/components/button/Button"
import { SILK_VALLEY_LOCATION } from "@/constants/Map.constants"
import { LatLngExpression } from "leaflet"
import { FC, useState } from "react"
import { IMapProps } from "./Map.props"

const MapComponent = dynamic(
	async () => await import("./map-components/Map-component"),
	{
		ssr: false,
	}
)
const MapContainerComponent: FC<IMapProps> = ({ currentLocation }) => {
	const [loadingMap, setLoadingMap] = useState(false)
	const [coordinates, setCoordinates] = useState<LatLngExpression | undefined>(
		undefined
	)

	return (
		<div className={style.map}>
			{currentLocation ? (
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
					whenReady={() => setLoadingMap(true)}
				>
					<MapComponent
						currentLocation={currentLocation}
						coordinates={coordinates}
					/>
				</MapContainer>
			) : null}

			<div className={style.navigation}>
				<div className={style.button}>
					<ButtonComponent onClick={() => setCoordinates(currentLocation)}>
						<TbCurrentLocation />
						<span>Где я ?</span>
					</ButtonComponent>
				</div>
				<div className={style.button}>
					<ButtonComponent onClick={() => setCoordinates(SILK_VALLEY_LOCATION)}>
						<VscLocation />
						<span>Silk Valley</span>
					</ButtonComponent>
				</div>
			</div>
		</div>
	)
}
export default MapContainerComponent
