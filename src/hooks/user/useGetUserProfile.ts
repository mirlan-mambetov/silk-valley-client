import { useFetchUserProfleQuery } from "@/api/api-user/api-user"
import { useEffect } from "react"
import { useAuth } from "../auth/useAuth"
import { useStoreActions } from "../store/useStoreActions"
import { useUser } from "./useUser"

export const useGetUserProfile = () => {
	const { user } = useUser()
	const { addUser, clearUser } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { data, isSuccess } = useFetchUserProfleQuery(null, {
		skip: !isAuthentificated,
	})

	useEffect(() => {
		if (isAuthentificated) {
			if (isSuccess) {
				addUser({ data })
			}
		} else {
			clearUser()
		}
	}, [isAuthentificated, isSuccess])

	return user
}
