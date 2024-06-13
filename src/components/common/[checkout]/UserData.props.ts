import { IUser } from "@/interfaces/user.interface"
import { Dispatch, SetStateAction } from "react"

export interface IUserDataProps {
	setUserData: Dispatch<
		SetStateAction<Pick<IUser, "email" | "name" | "phoneNumber"> | undefined>
	>
}
