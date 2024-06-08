import { IUser } from "@/interfaces/user.interface"
import { DetailsHTMLAttributes } from "react"

export interface IUserComponentProps
	extends DetailsHTMLAttributes<HTMLDivElement> {
	user: IUser
}
