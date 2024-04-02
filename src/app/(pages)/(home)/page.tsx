import { productFetchAxios } from "@/api/api-product/api-product"
import { ProductCardsComponent } from "@/components"

export const revalidate = 3600

async function fetchProducts() {
	try {
		const response = await productFetchAxios()
		if (!response.data) {
			throw new Error("Failed to fetch data")
		}
		return response.data
	} catch (error) {
		console.log(error)
	}
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
					<ProductCardsComponent products={data || []} title="Хиты продаж" />
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
