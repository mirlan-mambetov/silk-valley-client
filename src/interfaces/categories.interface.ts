import { IconType } from "react-icons"
import { IBase } from "./base.interface"

export interface ICategories extends IBase {
	name: string
	alias: string
	Icon?: IconType
	itemId?: number
}
