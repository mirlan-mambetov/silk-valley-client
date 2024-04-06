import { useStoreReducer } from "../store/useStoreReducer"

export const useAuth = () => {
	const { isAuthentificated, loading } = useStoreReducer((state) => state.auth)
	return { isAuthentificated, loading }
}
