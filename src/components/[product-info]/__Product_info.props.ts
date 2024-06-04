import { IProduct } from "@/interfaces/product.interface"

export interface IProductInfoProps {
	data: IProduct
	type?: "sticky" | "default"
	selectedColor?: string
	selectedSize?: string
}
