import { CardsComponent, Promotions } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import { PROMOTION_DATA } from "@/components/promotions/promotions.data"

const PromotionsPage = () => {
	return (
		<>
			<section>
				<div className="container">
					<Promotions data={PROMOTION_DATA} />
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
