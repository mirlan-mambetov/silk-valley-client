import { ReactNode } from "react"

export interface IScreenComponentProps {
	active: boolean
	content: ReactNode
	typeOfScreen?: "default" | "modal"
	closeHandle: () => void
}
