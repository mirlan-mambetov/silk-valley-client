import { IProduct } from "@/interfaces/product.interface"

export interface IProductActionsProps {
	alias: string
	disable?: boolean
	actionType: "toCart" | "toView"
	size?: string | undefined
	color?: string | undefined
	product: IProduct
	btnSize?: "1xl" | "2xl"
}
