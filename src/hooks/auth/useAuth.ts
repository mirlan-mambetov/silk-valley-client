import { AuthEnum } from "@/enums/Auth.enum"
import { clearCookies } from "@/helpers/cookie.helpers"
import { clearTokensFromStorage } from "@/helpers/local.storage.helper"
import { useRouter } from "next/navigation"
import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"

export const useAuth = () => {
	const { replace } = useRouter()
	const { isAuthentificated, loading } = useStoreReducer((state) => state.auth)
	const { loginPending, loginSuccess, loginRejected, logOutUser } =
		useStoreActions()

	const logoutHandle = () => {
		logOutUser()
		clearTokensFromStorage()
		clearCookies(AuthEnum.IS_AUTH)
		replace("/")
	}

	return {
		isAuthentificated,
		loading,
		loginPending,
		loginSuccess,
		loginRejected,
		logoutHandle,
	}
}
