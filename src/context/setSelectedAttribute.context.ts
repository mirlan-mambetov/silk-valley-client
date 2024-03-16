import { createContext } from "react"

export interface ISelectedAttributeContext {
	color: string | undefined
	size: string | undefined
	setColorHandler: (value: string) => void
	setSizeHandler: (value: string) => void
}

const SelectedAttributeState: ISelectedAttributeContext = {
	color: undefined,
	size: undefined,
	setColorHandler: () => {},
	setSizeHandler: () => {},
}

export const SelectedAttributeContext = createContext(SelectedAttributeState)
