import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const { products, totalDiscount, totalPrice } = useStoreReducer(
		(state) => state.cart
	)
	return { products, totalDiscount, totalPrice }
}
