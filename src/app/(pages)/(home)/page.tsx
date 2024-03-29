import { APP_URI } from "@/api/config/api-config"
import { CardsComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"

export const revalidate = 3600

async function fetchProducts() {
	try {
		const response = await fetch(`${APP_URI}/product`)

		return response.json()
	} catch (err) {
		throw new Error("Произошла ошибка при запросе товаров")
	}
}

const HomePage = async () => {
	const data = await fetchProducts()
	return (
		<>
			{/* BANNER HERO */}
			<section>
				<div className="container">{/* <Banner data={BANNER_DATA} /> */}</div>
			</section>

			{/* PROMOTIONS */}
			{/* <section>
				<div className="container">
					<PromotionComponent data={PROMOTION_DATA} />
				</div>
			</section> */}
			{/* CARDS*/}
			<section>{/* <PromotionUniqueComponent /> */}</section>
			<section>
				<div className="container">
					<CardsComponent products={data || []} limit={6} title="Хиты продаж" />
				</div>
			</section>

			<section>
				<div className="container">
					<CardsComponent products={data || CARDS_PRODUCT} />
				</div>
			</section>
			{/* CARDS*/}

			{/* WOMANS */}
			{/* <CardsComponent type="woman" products={WOMANS_PRODUCT} /> */}
		</>
	)
}

export default HomePage
