import { useStoreReducer } from "../store/useStoreReducer"

export const useUser = () => {
	const { isAuthtentificated, user } = useStoreReducer((state) => state.user)

	return { isAuthtentificated, user }
}
