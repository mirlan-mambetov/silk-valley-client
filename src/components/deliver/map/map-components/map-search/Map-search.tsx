"use client"

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch"
import "leaflet-geosearch/dist/geosearch.css"
import { useEffect } from "react"
import { useMap } from "react-leaflet"

export const MapSearchComponent = () => {
	const map = useMap()

	const searchControl = GeoSearchControl({
		provider: new OpenStreetMapProvider(),
		style: "bar",
		position: "topright",
		showMarker: true,
		showPopup: true,
		autoClose: false,
		retainZoomLevel: false,
		animateZoom: true,
		keepResult: false,
		searchLabel: "Введите адрес",
	})

	useEffect(() => {
		map.addControl(searchControl)
		// return () => map.removeControl(searchControl)
	}, [])
	return null
}
