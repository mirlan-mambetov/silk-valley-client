import { IProduct } from "./product.interface"

export interface ICartProducts extends IProduct {
	quantity: number
	color?: string
	size?: string
}
export interface AddToCartPayload {
	product: ICartProducts
}
