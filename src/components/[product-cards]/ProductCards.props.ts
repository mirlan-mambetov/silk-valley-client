import { IProduct } from "@/interfaces/product.interface"

export interface IProductCardsProps {
	products: IProduct[]
	title?: string
	grid?: "6" | "5"
}
