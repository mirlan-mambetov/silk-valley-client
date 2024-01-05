import { IBase } from "./base.interface"

export interface IShares extends IBase {
	name: string
	description?: string
	image?: string
}
