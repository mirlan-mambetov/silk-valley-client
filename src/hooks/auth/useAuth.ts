import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useAuth = () => {
	const { isAuthentificated, loading } = useStoreReducer((state) => state.auth)
	const { loginPending, loginSuccess, loginRejected, logOutUser } =
		useStoreActions()
	return {
		isAuthentificated,
		loading,
		loginPending,
		loginSuccess,
		loginRejected,
		logOutUser,
	}
}
