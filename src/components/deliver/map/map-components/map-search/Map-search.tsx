"use client"

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch"
import { useEffect } from "react"
import { useMap } from "react-leaflet"

export const MapSearchComponent = () => {
	const map = useMap()

	const searchControl = GeoSearchControl({
		provider: new OpenStreetMapProvider(),
		style: "bar",
		position: "topright",
		showMarker: false,
		showPopup: false,
		autoClose: false,
		retainZoomLevel: false,
		animateZoom: true,
		keepResult: false,
		searchLabel: "Enter Address",
	})

	useEffect(() => {
		map.addControl(searchControl)
		// return () => map.removeControl(searchControl)
	}, [])
	return null
}
