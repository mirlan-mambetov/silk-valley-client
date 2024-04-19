import { APP_URI } from "@/api/config/api-config"
import { LoaderComponent } from "@/components"
import { ISecondCategories } from "@/interfaces/categories.interface"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Catalog } from "./Catalog"

// FETCH DATA
export async function fetchData<T>(url: string): Promise<T> {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		next: {
			revalidate: 3600,
		},
	})
	if (!response.ok) return notFound()

	const promise: Promise<T> = await response.json()

	return promise
}

// FETCH CATEGORY
export async function fetchCategoryBySlug({
	params,
}: IPageParams): Promise<ISecondCategories> {
	const { alias } = params
	const url = `${APP_URI}/second-category/by-alias/${alias}`
	const category = await fetchData<ISecondCategories>(url)
	if (!category) return notFound()
	return category
}

// FETCH ALL CATEGORIES
export async function fetchAllCategories(): Promise<ISecondCategories[]> {
	const url = `${APP_URI}/second-category`
	const categories = await fetchData<ISecondCategories[]>(url)
	return categories
}

// GENERATE STATIC PARAMS
export async function generateStaticParams() {
	const categories = await fetchAllCategories()
	const paths = categories.map((category) => {
		return {
			params: { alias: category.slug },
		}
	})
	return paths
}

// GENERATE META DATA
export async function generateMetadata({
	params,
}: IPageParams): Promise<Metadata> {
	const category = await fetchCategoryBySlug({ params })

	return {
		title: `${
			category?.name
		} | ${category?.mainCategory.name.toLowerCase()} В магазине`,
	}
}

export default async function CatalogPage({ params }: IPageParams) {
	const category = await fetchCategoryBySlug({ params })
	return (
		<>
			<section>
				<div className="container">
					<Suspense
						fallback={<LoaderComponent position="absolute" color="black" />}
					>
						{category && <Catalog data={category} />}
					</Suspense>
				</div>
			</section>
		</>
	)
}
