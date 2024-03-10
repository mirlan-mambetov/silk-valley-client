"use client"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import style from "../map.module.scss"

export const MapContainerComponent = () => {
	const position = [51.505, -0.09]
	return (
		<MapContainer
			wheelPxPerZoomLevel={12}
			className={style.leaflet}
			center={[51.505, -0.09]}
			zoom={13}
			zoomControl={false}
			scrollWheelZoom={true}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={{ lat: position[0], lng: position[1] }}>
				<Popup>SilkValley</Popup>
			</Marker>
			<div className={style.copy}>
				&copy;
				<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>{" "}
				contributors
			</div>
		</MapContainer>
	)
}
