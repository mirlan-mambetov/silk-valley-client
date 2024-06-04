import { ReactNode } from "react"

export interface IDropDown {
	isShow: boolean
	children: ReactNode | undefined
	handleOpen: (children: ReactNode) => void
	handleClose: () => void
}
