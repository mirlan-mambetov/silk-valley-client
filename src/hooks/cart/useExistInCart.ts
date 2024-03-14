import { IProduct } from "@/interfaces/product.interface"
import { useCart } from "./useCart"

export const useExistInCart = (product: IProduct) => {
	const { products } = useCart()
	const isExist = products.some((item) => item.id === product.id)
	return {
		isExist,
	}
}
