import { useStoreReducer } from "../store/useStoreReducer"

export const useCart = () => {
	const { isExist, products, isAdd } = useStoreReducer((state) => state.cart)
	return { isExist, products, isAdd }
}
