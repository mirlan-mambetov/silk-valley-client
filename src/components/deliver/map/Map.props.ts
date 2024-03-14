import { LatLngExpression } from "leaflet"

export interface IMapProps {
	currentLocation: {
		lat: number
		lng: number
	}
	coordinates?: LatLngExpression
	deliverPoint?: LatLngExpression
}
