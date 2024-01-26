import { PROMOTION_DATA } from "@/components/promotions/promotions.data"
import { IPageParams } from "@/interfaces/page.interface"
import { Promotions } from "./Promotions"

const PromotionPage = ({ params }: IPageParams) => {
	const { alias } = params

	const promotion = PROMOTION_DATA.find((promo) => promo.alias === alias)
	return (
		<>
			<section>{promotion && <Promotions data={promotion} />}</section>
		</>
	)
}

export default PromotionPage
