import { useFetchUserProfleQuery } from "@/api/api-user/api-user"
import { useEffect } from "react"
import { useAuth } from "../auth/useAuth"
import { useStoreActions } from "../store/useStoreActions"
import { useUser } from "./useUser"

export const useGetUserProfile = () => {
	const { user } = useUser()
	const { addUser, clearUser } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { data, refetch, isSuccess } = useFetchUserProfleQuery(null)

	useEffect(() => {
		if (isAuthentificated && isSuccess) {
			refetch()
			if (data) {
				addUser({ data })
			}
		} else {
			clearUser()
		}
	}, [isAuthentificated, data, isSuccess])

	return user
}
