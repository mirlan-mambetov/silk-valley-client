import { useStoreReducer } from "../store/useStoreReducer"

export const useNotify = () => {
	const { isOpen, text, options, type } = useStoreReducer(
		(state) => state.notify
	)
	return { isOpen, text, options, type }
}
