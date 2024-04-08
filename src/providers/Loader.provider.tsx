import { LoaderContext } from "@/context/loader.context"
import { FC, PropsWithChildren, useState } from "react"

export const LoaderProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false)

	const setLoadingHandler = async (time?: number) => {
		setIsLoading(true)
		setTimeout(
			() => {
				setIsLoading(false)
			},
			time ? time : 3000
		)
	}

	return (
		<LoaderContext.Provider value={{ setLoadingHandler, isLoading }}>
			{children}
		</LoaderContext.Provider>
	)
}
