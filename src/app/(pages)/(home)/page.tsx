import { APP_URI } from "@/api/config/api-config"
import { ProductCardsComponent } from "@/components"
import { PromotionUniqueComponent } from "@/components/promotion/promotion-unique/Promotion-unique"
import { IProduct } from "@/interfaces/product.interface"

export const revalidate = 3600

// FETCH ALL PRODUCTS
export async function fetchProducts(): Promise<IProduct[]> {
	try {
		const response = await fetch(`${APP_URI}/product`)
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
				<PromotionUniqueComponent data={products} />
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
