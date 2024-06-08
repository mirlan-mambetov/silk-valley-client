"use client"

import { Button, MapIcon } from "@/components"
import { useMap } from "@/hooks/useMap"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { FC, useEffect } from "react"
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import { IMapContainerProps } from "./MapContainer.props"
import style from "./map.module.scss"

const MapComponent: FC<IMapContainerProps> = ({ currentLocation }) => {
	const { pointsDeliversLocation, pointDeliverLocation } = useMap()

	const map = useMapEvents({})

	useEffect(() => {
		if (pointDeliverLocation?.location) {
			map.flyTo(pointDeliverLocation.location).getZoomScale(40)
		}
	}, [pointDeliverLocation])

	return (
		<>
			<TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
			{pointsDeliversLocation &&
				pointsDeliversLocation.map((point) => (
					<Marker position={point.location} key={point.id}>
						<Popup>Пункт выдачи: {point.name}</Popup>
					</Marker>
				))}
			{currentLocation ? (
				<Marker position={currentLocation}>
					<Popup>Ваше текущее местоположение</Popup>
				</Marker>
			) : null}
			<div className={style.copy}>
				&copy;
				<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
				contributors
			</div>
			<div className={style.navigation}>
				<Button
					className={style.button}
					onClick={() => map.flyTo(currentLocation).getZoomScale(50)}
				>
					<MapIcon />
					<span>Где я ?</span>
				</Button>
			</div>
		</>
	)
}
export default MapComponent
