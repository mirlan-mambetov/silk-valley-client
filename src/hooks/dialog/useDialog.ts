import { useStoreReducer } from "../store/useStoreReducer"

export const useDialog = () => {
	const { dialogContent, isActive, isConfirm, type } = useStoreReducer(
		(state) => state.dialog
	)
	return { dialogContent, isActive, isConfirm, type }
}
