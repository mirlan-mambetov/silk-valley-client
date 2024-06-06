import { EnumNotifyType } from "@/enums/notify.enum"
import { IBase } from "./base.interface"
import { IOrder } from "./order.interface"

export interface IUser extends IBase {
	name: string
	email: string
	phoneNumber: number
	password: string
	avatar: string
	orders: IOrder[]
	notifications?: IUserNotifications[]
}
export interface IUserTokens {
	accessToken: string
	refreshToken: string
}
export interface IUserNotifications extends IBase {
	text: string
	expire: boolean
	userId: number
	typeOfNotify: EnumNotifyType
}
