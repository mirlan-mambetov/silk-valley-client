import { APP_URI } from "@/api/config/api-config"
import { Loader } from "@/components"
import { ICategories } from "@/interfaces/categories.interface"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Explorer } from "../Explorer"

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
export async function fetchCategoryByAlias({
	params,
}: IPageParams): Promise<ICategories> {
	const { alias } = params
	const url = `${APP_URI}/main-category/by-slug/${alias}`
	const category = await fetchData<ICategories>(url)
	return category
}

// FETCH ALL CATEGORIES
export async function fetchAllCategories(): Promise<ICategories[]> {
	const url = `${APP_URI}/main-category`
	const categories = await fetchData<ICategories[]>(url)
	return categories
}

// GENERATE STATIC PARAMS
export async function generateStaticParams() {
	const categories = await fetchAllCategories()
	const paths = categories.map((product) => {
		return {
			params: { alias: product.slug },
		}
	})
	return paths
}

// GENERATE META DATA
export async function generateMetadata({
	params,
}: IPageParams): Promise<Metadata> {
	const category = await fetchCategoryByAlias({ params })

	return {
		title: `Каталог ${category?.name.toLowerCase()} В магазине`,
	}
}

async function ExplorerPage({ params }: IPageParams) {
	const category = await fetchCategoryByAlias({ params })
	return (
		<>
			{/* HERO */}
			<section>
				<Suspense fallback={<Loader position="absolute" color="black" />}>
					{category && <Explorer data={category} />}
				</Suspense>
			</section>
		</>
	)
}
export default ExplorerPage
