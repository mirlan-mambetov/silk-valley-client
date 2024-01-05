import { IBase } from "./base.interface"

export interface IProduct extends IBase {
	title: string
	video?: string
	description: string
	poster: string
	images: string[]
	price: number
	article: number
	rating: number
	new?: boolean
	discount?: number
	isHit?: boolean
}
