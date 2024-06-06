import { ReactNode } from "react"

export interface IScreenComponentProps {
	active: boolean
	content: ReactNode
	closeHandle: () => void
}
