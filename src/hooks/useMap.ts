import { useStoreReducer } from "./store/useStoreReducer"

export const useMap = () => {
	const state = useStoreReducer((state) => state.map)
	return state
}
