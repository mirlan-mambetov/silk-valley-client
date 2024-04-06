import { useStoreReducer } from "../store/useStoreReducer"

export const useUser = () => {
	const { user } = useStoreReducer((state) => state.user)

	return { user }
}
