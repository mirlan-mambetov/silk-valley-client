import { IBase } from "./base.interface"
import { IOrder } from "./order.interface"

export interface IUser extends IBase {
	name: string
	email: string
	phoneNumber: number
	password: string
	avatar: string
	orders: IOrder[]
}
export interface IUserTokens {
	accessToken: string
	refreshToken: string
}
