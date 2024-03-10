"use client"
import { LatLngExpression } from "leaflet"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { FC, useEffect, useState } from "react"
import { TileLayer, useMapEvents } from "react-leaflet"
import { IMapProps } from "../Map.props"
import style from "../map.module.scss"
import MapMarkersComponent from "./Map-markers"

const MapComponent: FC<IMapProps> = ({ currentLocation, coordinates }) => {
	const [clickPoint, setClickPoint] = useState<LatLngExpression | null>(null)

	const map = useMapEvents({
		click(e) {
			setClickPoint(e.latlng)
		},
	})

	useEffect(() => {
		if (coordinates) {
			map.flyTo(coordinates)
		}
	}, [coordinates])

	// useEffect(() => {
	// 	console.log(clickPoint)
	// }, [clickPoint])

	return (
		<>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapMarkersComponent currentLocation={currentLocation} />
			<div className={style.copy}>
				&copy;
				<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
				contributors
			</div>
		</>
	)
}
export default MapComponent
