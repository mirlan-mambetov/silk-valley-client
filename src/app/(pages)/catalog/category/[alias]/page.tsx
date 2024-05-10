import { CHILDS_UIR_PATH } from "@/api/api-categories/api-categories"
import { APP_URI } from "@/api/config/api-config"
import { APP_REVALIDATE } from "@/constants/app.constants"
import { IChildsCategories } from "@/interfaces/categories.interface"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryPage } from "../Category"

// FETCH CATEGORY (CHILD CATEGORY)
export async function fetchData({ params }: IPageParams) {
	const { alias } = params
	const category = await fetch(
		`${APP_URI}${CHILDS_UIR_PATH}/by-alias/${alias}`,
		{
			next: {
				revalidate: APP_REVALIDATE,
			},
		}
	)
	if (!category.ok) return notFound()
	const promise: Promise<IChildsCategories> = await category.json()
	return promise
}

// GENERATE META DATA
export async function generateMetadata({
	params,
}: IPageParams): Promise<Metadata> {
	const category = await fetchData({ params })

	return {
		title: `${category.parentCategory.name} - ${category?.name} | в магазине`,
	}
}

export default async function page({ params }: IPageParams) {
	const category = await fetchData({ params })
	return <CategoryPage data={category} />
}
