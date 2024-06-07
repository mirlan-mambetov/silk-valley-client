import { createContext } from "react"

export interface ILoader {
	isLoading: boolean
	setLoadingHandler: (time?: number) => void
}

export const loaderInitialContext: ILoader = {
	isLoading: false,
	setLoadingHandler: (time?: number) => {},
}

export const LoaderContext = createContext(loaderInitialContext)
