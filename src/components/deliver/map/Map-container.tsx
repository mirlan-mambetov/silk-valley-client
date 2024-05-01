"use client"

import { ButtonComponent, MapIconComponent } from "@/components"
import { SILK_VALLEY_LOCATION } from "@/constants/Map.constants"
import { LatLngExpression } from "leaflet"
import dynamic from "next/dynamic"
import { FC, useState } from "react"
import { TbCurrentLocation } from "react-icons/tb"
import { MapContainer, TileLayer } from "react-leaflet"
import { IMapProps } from "./Map.props"
import style from "./map.module.scss"

const MapComponent = dynamic(
	async () => await import("./map-components/Map-component"),
	{
		ssr: false,
	}
)
const MapContainerComponent: FC<IMapProps> = ({ currentLocation }) => {
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
				>
					<TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
					<MapComponent
						currentLocation={currentLocation}
						coordinates={coordinates}
					/>
					{/* <MapSearchComponent /> */}
				</MapContainer>
			) : null}

			<div className={style.navigation}>
				<ButtonComponent
					className={style.button}
					onClick={() => setCoordinates(currentLocation)}
				>
					<TbCurrentLocation />
					<span>Где я ?</span>
				</ButtonComponent>
				<ButtonComponent
					className={style.button}
					onClick={() => setCoordinates(SILK_VALLEY_LOCATION)}
				>
					<MapIconComponent fontSize={18} />
					<span>Silk Valley</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
export default MapContainerComponent
