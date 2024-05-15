import { AuthEnum } from "@/enums/Auth.enum"
import { clearCookies } from "@/helpers/cookie.helpers"
import { clearTokensFromStorage } from "@/helpers/local.storage.helper"
import { useRouter } from "next/navigation"
import { useStoreActions } from "../store/useStoreActions"
import { useStoreReducer } from "../store/useStoreReducer"
import { useUser } from "../user/useUser"
import { useWebSocket } from "../ws/useWebSocket"

export const useAuth = () => {
	const { replace } = useRouter()
	const { user } = useUser()
	const socket = useWebSocket()
	const { isAuthentificated, loading } = useStoreReducer((state) => state.auth)
	const { loginPending, loginSuccess, loginRejected, logOutUser } =
		useStoreActions()

	const logoutHandle = () => {
		socket?.emit("logOut", { email: user?.email })
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
