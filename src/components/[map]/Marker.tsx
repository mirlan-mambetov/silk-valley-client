import { LatLngExpression } from "leaflet"
import { FC } from "react"
import { IMapContainerProps } from "./MapContainer.props"

interface IMarker {
	position: LatLngExpression
	name?: string
}

const MarkersComponent: FC<IMapContainerProps> = () => {
	// const markers: IMarker[] = [
	// 	{
	// 		position: SILK_VALLEY_LOCATION,
	// 		name: "Silk Valley",
	// 	},
	// 	{
	// 		position: { lat: currentLocation.lat, lng: currentLocation.lng },
	// 		name: "Ваше местоположение",
	// 	},
	// ]
	return (
		<>
			{/* {markers.map((marker, i) => (
				<Marker position={marker.position} key={i}>
					<Popup>{marker.name}</Popup>
				</Marker>
			))} */}
			{/* {selectedPoint ? (
				<Marker position={selectedPoint}>
					<Popup>Доставка в {address.road}</Popup>
				</Marker>
			) : null} */}
		</>
	)
}
export default MarkersComponent
