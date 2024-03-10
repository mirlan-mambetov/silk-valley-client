import { LatLngExpression } from "leaflet"
import { FC } from "react"
import { Marker, Popup } from "react-leaflet"
import { IMapProps } from "../Map.props"

interface IMarker {
	position: LatLngExpression
	name?: string
}

const MapMarkersComponent: FC<IMapProps> = ({ currentLocation }) => {
	const markers: IMarker[] = [
		{
			position: { lat: 222, lng: 222 },
			name: "Silk Valley",
		},
		{
			position: { lat: currentLocation.lat, lng: currentLocation.lng },
			name: "Ваше местоположение",
		},
	]
	return (
		<>
			{markers.map((marker, i) => (
				<Marker position={marker.position} key={i}>
					<Popup>{marker.name}</Popup>
				</Marker>
			))}
		</>
	)
}

export default MapMarkersComponent
