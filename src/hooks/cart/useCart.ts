import { calculateDiscount } from "@/utils/product.utils"
import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const { clearCart, addToCart, changedQuantity, removeFromCart } =
		useStoreActions()
	const { products } = useStoreReducer((state) => state.cart)

	let totalDiscount = 0
	const totalPrice = products.reduce((acc, product) => {
		let total: number = acc + product.price * product.productQuantity
		if (product.discount) {
			const discountAmount: number = parseInt(
				calculateDiscount(product.price, product.discount)
			)
			total -= discountAmount * product.productQuantity
			totalDiscount += discountAmount * product.productQuantity
		}
		return total
	}, 0)

	totalDiscount = totalDiscount

	return {
		products,
		totalDiscount,
		totalPrice,
		clearCart,
		addToCart,
		changedQuantity,
		removeFromCart,
	}
}
