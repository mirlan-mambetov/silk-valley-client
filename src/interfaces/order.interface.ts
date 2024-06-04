import { EnumOrderStatus, EnumPaymentMethod } from "@/enums/Payment.enum"
import { IBase } from "./base.interface"
import { IDeliverPoint } from "./deliver.interface"

export interface IOrder extends IBase {
	status: EnumOrderStatus
	totalCache: number
	userId: number
	payment_type: EnumPaymentMethod
	items: IOrderItem[]
	address: IDeliverPoint
	orderId: string
}

export interface IOrderItem extends IBase {
	name: string
}
