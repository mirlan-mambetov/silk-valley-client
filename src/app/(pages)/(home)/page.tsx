import { APP_URI } from "@/api/config/api-config"
import { ProductCardsComponent, PromotionComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"

// FETCH ALL PRODUCTS
export async function fetchProducts(): Promise<IProduct[]> {
	try {
		const response = await fetch(`${APP_URI}/product`, {
			next: {
				revalidate: 3600,
			},
			method: "GET",
		})
		if (!response.ok) {
			throw new Error("Fetch failed for products..")
		}
		return response.json()
	} catch (err) {
		throw new Error(String(err))
	}
}

export default async function HomePage() {
	const products = await fetchProducts()
	return (
		<>
			<section>
				<PromotionComponent data={products} />
			</section>
			<section>
				<div className="container">
					<ProductCardsComponent
						limit={6}
						products={products}
						title="Хиты продаж"
					/>
				</div>
			</section>
		</>
	)
}
