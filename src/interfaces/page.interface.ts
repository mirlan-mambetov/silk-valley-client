import { TypePageParams } from "@/types/page.type"

export interface IPageParams<T = TypePageParams & {}> {
	params: TypePageParams & T
	searchParams?: T
}
