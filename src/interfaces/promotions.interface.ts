import { IBase } from "./base.interface"
import { IProduct } from "./product.interface"

export interface IPromotions extends IBase {
	name: string
	alias: string
	description?: string
	image?: string
	products?: IProduct[]
}
