import { ReactNode, createContext } from "react"

interface IinitialContext {
	isOpen: boolean
	content: ReactNode | null
	setContentHandler: (content: ReactNode) => void
	clearContentHandler: () => void
}
const initialContext: IinitialContext = {
	isOpen: false,
	content: null,
	setContentHandler: () => {},
	clearContentHandler: () => {},
}
export const ScreenContext = createContext({ ...initialContext })
