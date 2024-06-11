import { IProduct } from "@/interfaces/product.interface"
import { DetailsHTMLAttributes } from "react"

export interface ICartRangeProps extends DetailsHTMLAttributes<HTMLDivElement> {
	text?: boolean
	product: IProduct
	quantity: number
}
