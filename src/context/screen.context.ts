import { ReactNode, createContext } from "react"

interface IinitialContext {
	screenHandle: (content: ReactNode) => void
}

export const ScreenContext = createContext<IinitialContext | undefined>(
	undefined
)
