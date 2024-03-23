import { SILK_VALLEY_LOCATION } from "@/constants/Map.constants"
import { LatLngExpression } from "leaflet"
import { FC } from "react"
import { Marker, Popup } from "react-leaflet"
import { IMapProps } from "../../Map.props"

interface IMarker {
	position: LatLngExpression
	name?: string
}

const MapMarkersComponent: FC<IMapProps> = ({
	currentLocation,
	deliverPoint,
}) => {
	// const { address } = useStoreReducer((state) => state.deliver)
	// const [selectedPoint, setSelectedPoint] = useState<LatLngExpression | null>(
	// 	null
	// )

	const markers: IMarker[] = [
		{
			position: SILK_VALLEY_LOCATION,
			name: "Silk Valley",
		},
		{
			position: { lat: currentLocation.lat, lng: currentLocation.lng },
			name: "Ваше местоположение",
		},
	]

	// useEffect(() => {
	// 	if (deliverPoint) {
	// 		setSelectedPoint(deliverPoint)
	// 	}
	// }, [deliverPoint])
	return (
		<>
			{markers.map((marker, i) => (
				<Marker position={marker.position} key={i}>
					<Popup>{marker.name}</Popup>
				</Marker>
			))}
			{/* {selectedPoint ? (
				<Marker position={selectedPoint}>
					<Popup>Доставка в {address.road}</Popup>
				</Marker>
			) : null} */}
		</>
	)
}

export default MapMarkersComponent
