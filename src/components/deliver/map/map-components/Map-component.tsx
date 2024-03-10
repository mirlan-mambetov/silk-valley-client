"use client"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { FC, useState } from "react"
import { TileLayer, useMapEvents } from "react-leaflet"
import { IMapProps } from "../Map.props"
import style from "../map.module.scss"
import MapMarkersComponent from "./Map-markers"

const MapComponent: FC<IMapProps> = ({ currentLocation }) => {
	const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
		null
	)

	const map = useMapEvents({
		click() {
			map.locate()
		},
		locationfound(e) {
			setPosition(e.latlng)
			map.flyTo(e.latlng, map.getZoom())
		},
	})
	console.log(position)

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
