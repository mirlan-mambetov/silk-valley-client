import { Dispatch, SetStateAction } from "react"

export interface IAuthProps {
	animate: boolean
	setChoice: Dispatch<SetStateAction<"login" | "register">>
}
