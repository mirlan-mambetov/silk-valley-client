import { useStoreReducer } from "../store/useStoreReducer"

export const useUser = () => {
	const user = useStoreReducer((state) => state.user)
	if (!user) {
		throw new Error("User state is not actuality!")
	}
	return user
}
