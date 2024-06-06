import { ReactNode, createContext } from "react"

export interface IContextPaylod {
	content: ReactNode
	typeOfScreen?: "default" | "modal"
}
interface IinitialContext {
	screenHandle: (paylod: IContextPaylod) => void
	closeHandle: () => void
}

export const ScreenContext = createContext<IinitialContext | undefined>(
	undefined
)
