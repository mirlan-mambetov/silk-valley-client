import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const { products } = useStoreReducer((state) => state.cart)
	return { products }
}
