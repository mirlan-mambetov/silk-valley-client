import { APP_URI } from "@/api/config/api-config"
import { ProductCardsComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"

export const revalidate = 3600

// FETCH ALL PRODUCTS
export async function fetchProduct(): Promise<IProduct[]> {
	try {
		const response = await fetch(`${APP_URI}/product`)
		return response.json()
	} catch (err) {
		throw new Error(String(err))
	}
}

export default async function HomePage() {
	const products = await fetchProduct()
	return (
		<>
			{/* BANNER HERO */}
			{/* <section>
				<div className="container"><Banner data={BANNER_DATA} /></div>
			</section> */}

			{/* PROMOTIONS */}
			{/* <section>
				<div className="container">
					<PromotionComponent data={PROMOTION_DATA} />
				</div>
			</section> */}
			{/* CARDS*/}
			{/* <section><PromotionUniqueComponent /></section> */}
			<section>
				<div className="container">
					<ProductCardsComponent products={products} title="Хиты продаж" />
				</div>
			</section>

			{/* <section>
				<div className="container">
					<ProductCardsComponent products={data || CARDS_PRODUCT} />
				</div>
			</section> */}
			{/* CARDS*/}

			{/* WOMANS */}
			{/* <CardsComponent type="woman" products={WOMANS_PRODUCT} /> */}
		</>
	)
}
