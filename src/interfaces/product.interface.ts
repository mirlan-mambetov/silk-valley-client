import { IBase } from "./base.interface"

export interface IProduct extends IBase {
	title: string
	video?: string
	description: string
}
