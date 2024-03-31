import { APP_URI } from "@/api/config/api-config"
import { ProductCardsComponent } from "@/components"

export const revalidate = 3600

async function fetchProducts() {
	const response = await fetch(`${APP_URI}/product`)
	return response.json()
}

export default async function HomePage() {
	const data = await fetchProducts()
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
					<ProductCardsComponent
						products={data || []}
						limit={6}
						title="Хиты продаж"
					/>
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
