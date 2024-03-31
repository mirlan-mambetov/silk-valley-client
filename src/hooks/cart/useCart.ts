import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const { isExist, products } = useStoreReducer((state) => state.cart)
	return { isExist, products }
}
