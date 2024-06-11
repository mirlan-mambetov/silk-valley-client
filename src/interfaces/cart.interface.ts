import { IProduct } from "./product.interface"

export interface ICartProduct extends IProduct {
	selectedSize?: string
	selectedColor?: string
	quantityInCart: number
}
export interface ICart {
	products: ICartProduct[]
	totalCache: number
	totalDiscount?: number
	isShow: boolean
}
export interface ICartPayload {
	product: ICartProduct
}

export interface IChangeQuantityPayload extends Pick<IProduct, "id"> {
	type: "minus" | "plus"
}
