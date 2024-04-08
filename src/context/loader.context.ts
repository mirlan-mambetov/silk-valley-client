import { ILoader } from "@/interfaces/loader.interface"
import { createContext } from "react"

export const loaderInitialContext: ILoader = {
	isLoading: false,
	setLoadingHandler: (time?: number) => {},
}

export const LoaderContext = createContext(loaderInitialContext)
