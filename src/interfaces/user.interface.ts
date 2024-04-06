import { IBase } from "./base.interface"

export interface IUser extends IBase {
	name: string
	email: string
	phoneNumber: number
	password: string
}
export interface IUserTokens {
	accessToken: string
	refreshToken: string
}
