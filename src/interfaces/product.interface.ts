import { IBase } from "./base.interface"
import { ICategories } from "./categories.interface"

export interface IProduct extends IBase {
	title: string
	subtitle: string
	alias: string
	video?: string
	description: string
	poster: string
	price: number
	articleNumber: number
	rating: number
	new?: boolean
	discount?: number
	isHit?: boolean
	specifications?: IProductSpecifications[]
	quantity: number
	attributes: IProductAttributes[]
	category: Pick<ICategories, "id" | "name">
}

export interface IProductAttributes extends IBase {
	color: string
	size?: string
	images: string[]
}

export interface IProductImages extends IBase {
	color: string
	image: string[]
}

export interface IProductSpecifications extends IBase {
	name: string
	value: string
}

export interface IProductSpecificationsAttributes extends IBase {
	name: string
	value: string
}
