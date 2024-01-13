import { ICategories } from "./categories.interface"

export interface IMenuData extends ICategories {
	childsData?: ICategories[]
}
