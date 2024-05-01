"use client"
import { mapApi } from "@/api/map.api"
import { useMapClickedBlock } from "@/hooks/map/useMapClickedBlock"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useStoreReducer } from "@/hooks/store/useStoreReducer"
import { useQuery } from "@tanstack/react-query"
import { LatLngExpression } from "leaflet"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { FC, useEffect, useState } from "react"
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import { IMapProps } from "../Map.props"
import style from "../map.module.scss"
import MapMarkersComponent from "./map-markers/Map-markers"

const MapComponent: FC<IMapProps> = ({ currentLocation, coordinates }) => {
	const { clickBlocked, clickHandler } = useMapClickedBlock()
	const { openNotifyHandler } = useStoreActions()
	const { address } = useStoreReducer((state) => state.deliver)
	const [selectedPoint, setSelectedPoint] = useState<LatLngExpression | null>(
		null
	)
	const [clickPoint, setClickPoint] = useState<{
		lat: number
		lng: number
	} | null>(null)

	const { addDeliverAddress } = useStoreActions()

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["getMapGeoCodes", clickPoint],
		queryFn: () => mapApi.getGoeCode(clickPoint?.lat, clickPoint?.lng),
		enabled: !!clickPoint,
	})

	const map = useMapEvents({
		click(e) {
			clickHandler()
			if (clickBlocked) return
			setClickPoint(e.latlng)
			setSelectedPoint(e.latlng)
		},
	})

	useEffect(() => {
		if (coordinates) {
			map.flyTo(coordinates).getZoom()
		}
	}, [coordinates])

	useEffect(() => {
		if (clickPoint) {
			refetch()
			if (data) {
				addDeliverAddress({
					city: data.address?.city,
					city_district: data.address?.city_district,
					country: data.address?.country,
					country_code: data.address?.country_code,
					house_number: data.address?.house_number,
					postCode: data.address?.postCode,
					road: data.address?.road,
					state: data.address?.state,
					village: data.address?.village,
					town: data.address?.town,
				})
				openNotifyHandler({
					text: "Координаты выбраны",
					type: "success",
					options: { position: "bottomCenter" },
				})
			}
		}
	}, [clickPoint, data])

	return (
		<>
			{isLoading && (
				<div className={style.loader}>
					<span>Выбираем координат...</span>
				</div>
			)}
			<TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
			{selectedPoint ? (
				<Marker position={selectedPoint}>
					<Popup>Доставка в {address.road}</Popup>
				</Marker>
			) : null}
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
