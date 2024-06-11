import { IProduct } from "@/interfaces/product.interface"
import { useCart } from "./useCart"

export const useExistInCart = (product: IProduct) => {
	const { state } = useCart()
	const isExist = state.products.some((item) => item.id === product.id)
	return {
		isExist,
	}
}
