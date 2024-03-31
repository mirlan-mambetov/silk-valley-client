import { IProduct } from "./product.interface"

export interface ICartProduct extends IProduct {
	selectedColor: string | undefined
	selectedSize: string | undefined
}
export interface ICartPayload {
	product: ICartProduct
}
export interface ICartAddAttributePayload {
	productId: number
	color: string | undefined
	size: string | undefined
}

export interface IChangeQuantityPayload extends Pick<IProduct, "id"> {
	type: "minus" | "plus"
}
