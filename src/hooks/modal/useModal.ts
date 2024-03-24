import { useStoreReducer } from "../store/useStoreReducer"

export const useModal = () => {
	const { content, isActive } = useStoreReducer((state) => state.modal)
	return { content, isActive }
}
