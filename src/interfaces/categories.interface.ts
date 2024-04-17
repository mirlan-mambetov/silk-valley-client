import { IBase } from "./base.interface"
import { IProduct } from "./product.interface"

export interface ICategories extends IBase {
	id: number
	name: string
	slug: string
	createdAt: string
	updatedAt: string
	categories: ISecondCategories[]
	products: IProduct[]
}

export interface ISecondCategories extends IBase {
	id: number
	name: string
	slug: string
	mainCategoryId: number
	mainCategory: Pick<ICategories, "id" | "name">
	childsCategories: IChildsCategories[]
	createdAt: string
	updatedAt: string
	products: IProduct[]
}

export interface IChildsCategories extends IBase {
	name: string
	products: []
}
