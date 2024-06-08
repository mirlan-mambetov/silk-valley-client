import { EnumOrderStatus, EnumPaymentMethod } from "@/enums/Payment.enum"
import { IBase } from "./base.interface"
import { IPointsDelivery } from "./select.location.interface"

export interface IOrder extends IBase {
	status: EnumOrderStatus
	totalCache: number
	userId: number
	payment_type: EnumPaymentMethod
	items: IOrderItem[]
	address: IPointsDelivery
	orderId: string
}

export interface IOrderItem extends IBase {
	name: string
}
