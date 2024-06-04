import { IProduct } from "@/interfaces/product.interface"

export interface IProductActionsProps {
	alias: string
	disable?: boolean
	actionType: "toCart" | "toView"
	product: IProduct
	btnSize?: "1xl" | "2xl"
}
