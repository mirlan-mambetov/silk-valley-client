import { IProduct } from "./product.interface"

export interface ICartProducts extends IProduct {
	quantity: number
}
export interface AddToCartPayload {
	product: ICartProducts
}
