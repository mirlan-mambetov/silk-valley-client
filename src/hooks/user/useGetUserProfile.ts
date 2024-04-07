import { useFetchUserProfleQuery } from "@/api/api-user/api-user"
import { useEffect } from "react"
import { useAuth } from "../auth/useAuth"
import { useStoreActions } from "../store/useStoreActions"
import { useUser } from "./useUser"

export const useGetUserProfile = () => {
	const { user } = useUser()
	const { addUser, clearUser } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { data, refetch } = useFetchUserProfleQuery(null)

	useEffect(() => {
		if (isAuthentificated) {
			refetch().unwrap()
		} else {
			clearUser()
		}
	}, [isAuthentificated])

	useEffect(() => {
		if (data) {
			addUser({ data })
		}
	}, [data])

	return user
}
