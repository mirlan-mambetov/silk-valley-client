import { useStoreReducer } from "../store/useStoreReducer"

export const useDeliver = () => {
	const { address, isConfirm } = useStoreReducer((state) => state.deliver)

	return { address, isConfirm }
}
