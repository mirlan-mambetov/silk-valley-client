import { IDeliverPoint } from "@/interfaces/deliver.interface"

export const showDestinationName = (address: IDeliverPoint) => {
	return address.city && address.road
		? `${address.city.replace("город", "г.")}. ${address.road}`
		: address.town && address.road
		? `${address.town}. ${address.road}`
		: address.village && address.road
		? `${address.village}. ${address.road}`
		: "Выбрать адрес доставки"
}
