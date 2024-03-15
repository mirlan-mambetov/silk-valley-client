import { useStoreReducer } from "../store/useStoreReducer"

export const useNotify = () => {
	const { isOpen, text } = useStoreReducer((state) => state.notify)
	return { isOpen, text }
}
