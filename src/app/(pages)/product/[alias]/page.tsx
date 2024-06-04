import { APP_URI } from "@/api/config/api-config"
import { LoaderComponent } from "@/components"
import { APP_REVALIDATE } from "@/constants/app.constants"
import { IPageParams } from "@/interfaces/page.interface"
import { IProduct } from "@/interfaces/product.interface"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Detail } from "./Detail"

// FETCH PRODUCT BY ALIAS

export async function fetchData({ params }: IPageParams): Promise<IProduct> {
	const { alias } = params
	const response = await fetch(`${APP_URI}/product/by-alias/${alias}`, {
		next: {
			revalidate: APP_REVALIDATE,
		},
	})
	if (!response.ok) notFound()
	const product = await response.json()
	return product
}

// GENERATE STATIC PARAMS
export async function generateStaticParams() {
	const response: Response = await fetch(`${APP_URI}/product`, {
		next: { revalidate: APP_REVALIDATE },
	})
	const promise: Promise<IProduct[]> = response.json()
	const products = await promise
	const paths = products.map((product) => {
		return {
			params: { alias: product.alias },
		}
	})
	return paths
}

// GENERATE META DATA
export async function generateMetadata({
	params,
}: IPageParams): Promise<Metadata> {
	const product = await fetchData({ params })

	return {
		title: `${product.title} В магазине`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.title}`,
			siteName: "Silk Valley",
			url: "https://slkvalley.com",
			images: {
				width: 32,
				height: 32,
				href: `${process.env.NEXT_PUBLIC_API_STATIC}/${product.poster}`,
				alt: `${product.title}`,
				url: `${process.env.NEXT_PUBLIC_API_STATIC}`,
			},
			locale: "ru_RU",
			type: "website",
		},
		alternates: {
			canonical: `/${product.alias}`,
		},
	}
}

export default async function ProductPage({ params }: IPageParams) {
	const product = await fetchData({ params })

	return (
		<>
			<section>
				{/* DETAIL */}
				<div className="container">
					<Suspense
						fallback={<LoaderComponent position="absolute" color="black" />}
					>
						<Detail data={product} />
					</Suspense>
				</div>
			</section>
		</>
	)
}
