import { CardsComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import { PromotionUniqueComponent } from "@/components/promotion/promotion-unique/Promotion-unique"
import { Banner } from "./Banner/Banner"
import { BANNER_DATA } from "./Banner/banner.data"

const HomePage = () => {
	return (
		<>
			{/* BANNER HERO */}
			<section>
				<div className="container">
					<Banner data={BANNER_DATA} />
				</div>
			</section>

			{/* PROMOTIONS */}
			{/* <section>
				<div className="container">
					<PromotionComponent data={PROMOTION_DATA} />
				</div>
			</section> */}
			{/* CARDS*/}
			<section>
				<PromotionUniqueComponent />
			</section>
			<section>
				<div className="container">
					<CardsComponent
						products={CARDS_PRODUCT}
						limit={6}
						title="Хиты продаж"
					/>
				</div>
			</section>

			<section>
				<div className="container">
					<CardsComponent products={CARDS_PRODUCT} limit={6} />
				</div>
			</section>
			{/* CARDS*/}

			{/* WOMANS */}
			{/* <CardsComponent type="woman" products={WOMANS_PRODUCT} /> */}
		</>
	)
}

export default HomePage
