import { ReactNode, createContext } from "react"

export interface IContextPaylod {
	content: ReactNode
	typeOfScreen?: "default" | "modal"
}
interface IinitialContext {
	screenHandle: (paylod: IContextPaylod) => void
}

export const ScreenContext = createContext<IinitialContext | undefined>(
	undefined
)
