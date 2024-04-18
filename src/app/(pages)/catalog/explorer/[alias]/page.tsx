import { APP_URI } from "@/api/config/api-config"
import { LoaderComponent } from "@/components"
import { ICategories } from "@/interfaces/categories.interface"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Explorer } from "../Explorer"

// FETCH DATA
export async function fetchCategoryBySlug({ params }: IPageParams) {
	try {
		const response = await fetch(
			`${APP_URI}/main-category/by-slug/${params.alias}`,
			{
				next: {
					revalidate: 60,
				},
			}
		)
		const promise: Promise<ICategories> = await response.json()
		const category = await promise

		if (!category) return notFound()
		return category
	} catch (error) {
		console.log(error)
	}
}

// GENERATE STATIC PARAMS
export async function generateStaticParams() {
	const response = await fetch(`${APP_URI}/main-category`)
	const promise: Promise<ICategories[]> = await response.json()
	const categories = await promise
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
	const category = await fetchCategoryBySlug({ params })

	return {
		title: `Каталог ${category?.name.toLowerCase()} В магазине`,
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

async function ExplorerPage({ params }: IPageParams) {
	const category = await fetchCategoryBySlug({ params })
	return (
		<>
			{/* HERO */}
			<section>
				<Suspense
					fallback={<LoaderComponent position="absolute" color="black" />}
				>
					{category && <Explorer data={category} />}
				</Suspense>
			</section>
		</>
	)
}
export default ExplorerPage
