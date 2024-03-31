import { createContext } from "react"

export interface ISelectedAttributeContext {
	color: string | undefined
	size: string | undefined
	setColorHandler: (value: string) => void
	setSizeHandler: (value: string) => void
	setClickHandler: () => void
	clearHandler: () => void
	isClick?: boolean
}

const SelectedAttributeState: ISelectedAttributeContext = {
	color: undefined,
	size: undefined,
	isClick: false,
	setColorHandler: () => {},
	setSizeHandler: () => {},
	setClickHandler: () => {},
	clearHandler: () => {},
}

export const SelectedAttributeContext = createContext(SelectedAttributeState)
