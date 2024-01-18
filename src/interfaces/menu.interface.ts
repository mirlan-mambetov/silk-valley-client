import { ICategories, IChildsCategories } from "./categories.interface"

export interface IMenuData extends ICategories {
	childsData?: IChildsCategories[]
}
