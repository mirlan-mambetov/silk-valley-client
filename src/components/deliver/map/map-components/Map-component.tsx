"use client"
import { mapApi } from "@/api/map.api"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { FC, useEffect, useState } from "react"
import { TileLayer, useMapEvents } from "react-leaflet"
import { IMapProps } from "../Map.props"
import style from "../map.module.scss"
import MapMarkersComponent from "./Map-markers"

const MapComponent: FC<IMapProps> = ({ currentLocation, coordinates }) => {
	const { addDeliverAddress } = useStoreActions()
	const [clickPoint, setClickPoint] = useState<{
		lat: number
		lng: number
	} | null>(null)

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

	useEffect(() => {
		const getGeo = async (lat: number, lng: number) => {
			const res = await mapApi.getGoeCode(lat, lng)
			addDeliverAddress({
				city: res.address?.city,
				city_district: res.address?.city_district,
				country: res.address?.country,
				country_code: res.address?.country_code,
				house_number: res.address?.house_number,
				postCode: res.address?.postCode,
				road: res.address?.road,
				state: res.address?.state,
				village: res.address?.village,
				town: res.address?.town,
			})
		}

		if (clickPoint) {
			getGeo(clickPoint.lat, clickPoint.lng)
		}
	}, [clickPoint])

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
