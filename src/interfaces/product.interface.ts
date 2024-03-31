import { IBase } from "./base.interface"

export interface IProduct extends IBase {
	title: string
	subtitle: string
	alias: string
	video?: string
	description: string
	poster: string
	images: IProductImages[]
	price: number
	articleNumber: number
	rating: number
	new?: boolean
	sizes?: string[]
	discount?: number
	isHit?: boolean
	specifications?: IProductSpecifications
	quantity: number
}

export interface IProductImages extends IBase {
	color: string
	image: string[]
}

export interface IProductSpecifications extends IBase {
	attributes: IProductSpecificationsAttributes[]
}

export interface IProductSpecificationsAttributes extends IBase {
	name: string
	value: string
}
