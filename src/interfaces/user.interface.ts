import { EnumOrderStatus } from "@/enums/Payment.enum"
import { IBase } from "./base.interface"

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
	total: number
	userId: number
	items: IUserOrderItems[]
}
export interface IUserOrderItems {
	id: number
	name: string
}
