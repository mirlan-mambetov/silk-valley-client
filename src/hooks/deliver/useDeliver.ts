import { useStoreReducer } from "../store/useStoreReducer"

export const useDeliver = () => {
	const state = useStoreReducer((state) => state.deliver)

	return state
}
