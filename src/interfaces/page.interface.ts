import { TypePageParams } from "@/types/page.type"

export interface IPageParams<T = {}> {
	params: TypePageParams
	searchParams?: T
}
