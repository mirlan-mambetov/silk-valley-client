import { PROMOTION_DATA } from "@/app/(pages)/promotions/promotions.data"
import {
	CardsComponent,
	HeadingComponent,
	PromotionComponent,
} from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"

const PromotionsPage = () => {
	return (
		<>
			<section>
				<div className="container">
					<HeadingComponent text="Акции недели" length={4} />
					<PromotionComponent routes data={PROMOTION_DATA} size="xl3" />
				</div>
			</section>
			<section>
				<div className="container">
					<CardsComponent
						products={CARDS_PRODUCT}
						limit={6}
						title="Акционные товары"
					/>
				</div>
			</section>
		</>
	)
}

export default PromotionsPage
