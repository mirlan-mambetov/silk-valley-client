import { LoaderContext } from "@/context/loader.context"
import { useContext } from "react"

export const useLoader = () => {
	const { isLoading, setLoadingHandler } = useContext(LoaderContext)
	return {
		isLoading,
		setLoadingHandler,
	}
}
