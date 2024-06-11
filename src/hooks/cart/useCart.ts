import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const state = useStoreReducer((state) => state.cart)
	const {
		addToCart,
		removeFromCart,
		clearCart,
		closeCart,
		showCart,
		changeQuantity,
	} = useStoreActions()

	return {
		state,
		addToCart,
		removeFromCart,
		clearCart,
		closeCart,
		showCart,
		changeQuantity,
	}
}
