import { EnumOrderStatus, EnumPaymentMethod } from "@/enums/Payment.enum"
import { IBase } from "./base.interface"
import { IDeliverPoint } from "./deliver.interface"

export interface IUser extends IBase {
	name: string
	email: string
	phoneNumber: number
	password: string
	avatar: string
	orders: IUserOrders[]
}
export interface IUserTokens {
	accessToken: string
	refreshToken: string
}

export interface IUserOrders extends IBase {
	status: EnumOrderStatus
	totalCache: number
	userId: number
	payment_type: EnumPaymentMethod
	items: IUserOrderItems[]
	address: IDeliverPoint
	orderId: string
}
export interface IUserOrderItems {
	id: number
	name: string
}
