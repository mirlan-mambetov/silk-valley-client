import { useStoreReducer } from "../store/useStoreReducer"

export const useDialog = () => {
	const { dialogContent, isActive } = useStoreReducer((state) => state.dialog)
	return { dialogContent, isActive }
}
