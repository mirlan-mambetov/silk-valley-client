import { IProduct } from "@/interfaces/product.interface"

export interface IProductAttributes {
	data: IProduct
	selectedColorHandle: (value: string) => void
	selectedSizeHandle: (value: string) => void
	selectedSize?: string
	selectedColor?: string
}
