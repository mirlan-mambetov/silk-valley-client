import { PROMOTION_DATA } from "@/app/(pages)/promotions/promotions.data"
import { CardsComponent, PromotionComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
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
			<section>
				<div className="container">
					<PromotionComponent data={PROMOTION_DATA} />
				</div>
			</section>
			{/* CARDS*/}
			<section>
				<div className="container">
					<CardsComponent products={CARDS_PRODUCT} />
				</div>
			</section>
			{/* CARDS*/}
			<section>
				<div className="container">
					<CardsComponent
						products={CARDS_PRODUCT}
						limit={6}
						title="Хиты продаж"
					/>
				</div>
			</section>
			{/* WOMANS */}
			{/* <CardsComponent type="woman" products={WOMANS_PRODUCT} /> */}
		</>
	)
}

export default HomePage
