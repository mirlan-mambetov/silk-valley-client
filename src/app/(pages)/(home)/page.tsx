import { APP_URI } from "@/api/config/api-config"
import { ProductCards } from "@/components"
import { APP_REVALIDATE } from "@/constants/app.constants"
import { IProduct } from "@/interfaces/product.interface"

// FETCH ALL PRODUCTS
export async function fetchProducts(): Promise<IProduct[]> {
	const response = await fetch(`${APP_URI}/product`, {
		next: {
			revalidate: APP_REVALIDATE,
		},
		method: "GET",
	})
	if (!response.ok) {
		throw new Error("Fetch failed for products..")
	}
	return response.json()
}

export default async function HomePage() {
	const products = await fetchProducts()
	return (
		<>
			<section>{/* <PromotionComponent data={products} /> */}</section>
			<section>
				<div className="container">
					<ProductCards products={products} title="Хиты продаж" />
				</div>
			</section>
		</>
	)
}
