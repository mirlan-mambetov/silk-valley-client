import { APP_URI } from "@/api/config/api-config"
import { ISecondCategories } from "@/interfaces/categories.interface"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Catalog } from "./Catalog"

export async function fetchCategory({ params }: IPageParams) {
	try {
		const { alias } = params
		const response = await fetch(
			`${APP_URI}/second-category/by-alias/${alias}`,
			{
				next: {
					revalidate: 3600,
				},
			}
		)

		const promise: Promise<ISecondCategories> = await response.json()
		const category = await promise
		if (!category) return notFound()
		return category
	} catch (error) {
		console.log(error)
	}
}
// GENERATE STATIC PARAMS
export async function generateStaticParams() {
	const response = await fetch(`${APP_URI}/second-category`)
	const promise: Promise<ISecondCategories[]> = await response.json()
	const categories = await promise
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
	const category = await fetchCategory({ params })

	return {
		title: `${
			category?.name
		} | ${category?.mainCategory.name.toLowerCase()} В магазине`,
		// openGraph: {
		// 	title: `${product.title}`,
		// 	siteName: "Silk Valley",
		// 	url: "https://slkvalley.com",
		// 	images: {
		// 		width: 32,
		// 		height: 32,
		// 		// href: `${process.env.NEXT_PUBLIC_API_STATIC}/${product.poster}`,
		// 		alt: `${product.title}`,
		// 		url: `${process.env.NEXT_PUBLIC_API_STATIC}`,
		// 	},
		// 	locale: "ru_RU",
		// 	type: "website",
		// },
		// alternates: {
		// 	canonical: `/${product.alias}`,
		// },
	}
}

export default async function CatalogPage({ params }: IPageParams) {
	const category = await fetchCategory({ params })
	return (
		<>
			<section>
				<div className="container">
					<Suspense fallback={<>Загрузка...</>}>
						{category && <Catalog data={category} />}
					</Suspense>
				</div>
			</section>
		</>
	)
}
