import { useStoreReducer } from "../store/useStoreReducer"

export const useDeliver = () => {
	const { address } = useStoreReducer((state) => state.deliver)

	return { address }
}
