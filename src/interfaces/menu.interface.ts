import { IconType } from "react-icons"

export interface IMenuItems {
	id: number
	href: string
	name: string
	Icon?: IconType
	itemId?: number
}
export interface IMenuData extends IMenuItems {
	childsData?: IMenuItems[]
}
