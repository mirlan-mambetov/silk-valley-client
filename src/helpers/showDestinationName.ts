import { IPointsDelivery } from "@/interfaces/select.location.interface"

export const showDestinationName = (location?: IPointsDelivery) => {
	return location ? `Пунк выдачи: ${location?.name}` : "Выбрать тип доставки"
}
